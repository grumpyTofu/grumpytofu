import type { APIRoute } from 'astro';
import type { ContactRequest } from '../../types/contact';

export const POST: APIRoute = async ({ request }) => {
  try {
    const grecaptchaToken = request.headers.get('authorization');

    const grecaptchaBaseUrl = 'https://www.google.com/recaptcha/api/siteverify';
    const grecaptchaUrl = `${grecaptchaBaseUrl}?secret=${
      import.meta.env.GRECAPTCHA_SECRET
    }&response=${grecaptchaToken}`;

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

      return new Response(JSON.stringify({ message, type: 'toast-error' }), { status: 401 });
    }

    if (grecaptchaVerifyResult.score < 0.7) {
      return new Response(JSON.stringify({ message: 'Captcha Failed', type: 'toast-error' }), {
        status: 401,
      });
    }

    const { name, email, message } = (await request.json()) as ContactRequest;

    if (!name) {
      return new Response(JSON.stringify({ name: 'Name is required.' }), { status: 400 });
    } else if (!email) {
      return new Response(JSON.stringify({ email: 'Email is required.' }), { status: 400 });
    } else if (!message) {
      return new Response(JSON.stringify({ message: 'Message is required.' }), { status: 400 });
    }

    const key = import.meta.env.WHOIS_EMAIL_VERIFICATION_API_KEY;
    const verifyResponse = await fetch(
      `https://emailverification.whoisxmlapi.com/api/v2?apiKey=${key}&emailAddress=${email}`
    );

    if (verifyResponse.status !== 402) {
      const verifyResult = await verifyResponse.json();

      if (verifyResult.formatCheck === 'false') {
        return new Response(JSON.stringify({ email: 'invalid email format' }), { status: 400 });
      } else if (verifyResult.smtpCheck === 'false') {
        return new Response(JSON.stringify({ email: 'email not deliverable' }), { status: 400 });
      } else if (verifyResult.dnsCheck === 'false') {
        return new Response(JSON.stringify({ email: 'email domain invalid' }), { status: 400 });
      }
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
        access_key: import.meta.env.WEB3_FORMS_API_KEY,
      }),
    });

    if (contactResponse.status !== 200) {
      return new Response(JSON.stringify({ message: 'Failed to send message.' }), { status: 500 });
    }

    return new Response(
      JSON.stringify({ message: 'Message successfully sent!', type: 'toast-success' }),
      { status: 200 }
    );
  } catch (error) {
    const genericMessage = 'An unexpected error occurred.';
    console.error(genericMessage, error);
    return new Response(JSON.stringify({ message: genericMessage, type: 'toast-error' }), {
      status: 500,
    });
  }
};
