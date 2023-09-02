// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { ContactRequest } from '../../types/contact';

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') return res.status(405).end();

    const grecaptchaToken = req.headers.authorization;

    const grecaptchaBaseUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const grecaptchaUrl = `${grecaptchaBaseUrl}?secret=${process.env.GRECAPTCHA_SECRET}&response=${grecaptchaToken}`;

    const grecaptchaVerifyResponse = await fetch(grecaptchaUrl);
    const grecaptchaVerifyResult = await grecaptchaVerifyResponse.json();

    if (!grecaptchaVerifyResult.success) {
      const [error] = grecaptchaVerifyResult['error-codes'];
      console.warn(error);

      let message: string;

      switch (error) {
        case 'timeout-or-duplicate':
          message = 'Possible timeout or duplicate. Please refresh and try again.';
          break;
        default:
          message = 'Captcha Failed';
      }

      return res.status(401).json({ message, type: 'toast-error' });
    }

    if (grecaptchaVerifyResult.score < 0.7)
      return res.status(401).json({ type: 'toast-error', message: 'Captcha Failed' });

    const { name, email, message } = JSON.parse(req.body) as ContactRequest;

    if (!name) return res.status(400).json({ name: 'Name is required.' });
    if (!email) return res.status(400).json({ email: 'Email is required' });
    if (!message) return res.status(400).json({ message: 'Message is required.' });

    const key = process.env.WHOIS_EMAIL_VERIFICATION_API_KEY;
    const verifyResponse = await fetch(
      `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${key}&emailAddress=${email}`
    );

    if (verifyResponse.status !== 402) {
      const verifyResult = await verifyResponse.json();

      if (verifyResult.formatCheck === 'false')
        return res.status(400).json({ email: 'invalid email format' });
      if (verifyResult.smtpCheck === 'false')
        return res.status(400).json({ email: 'email not deliverable' });
      if (verifyResult.dnsCheck === 'false')
        return res.status(400).json({ email: 'email domain invalid' });
      // if (verifyResult.disposableCheck === "false") return res.status(400).json({ email: "email is disposable" });
    } else {
      console.error('Out of API calls');
    }

    const contactResponse = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        from_name: 'Grumpytofu',
        subject: 'New Contact Request',
        access_key: process.env.WEB3_FORMS_API_KEY,
      }),
    });

    if (contactResponse.status !== 200) return res.status(500).end();

    return res.status(200).end();
  } catch (error) {
    const genericMessage = 'An unexpected error occurred.';
    console.error(genericMessage, error);
    return res.status(500).json({ type: 'toast-error', message: genericMessage });
  }
}
