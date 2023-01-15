// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ContactRequest } from "@portfolio/types/contact";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method !== "POST") res.status(405).end();

  const { firstName, lastName, email } = JSON.parse(req.body) as ContactRequest;

  if (!firstName) res.status(400).json({ firstName: "First name is required." });
  if (!lastName) res.status(400).json({ lastName: "Last name is required." });
  if (!email) res.status(400).json({ email: "Email is required" });

  const key = process.env.WHOIS_EMAIL_VERIFICATION_API_KEY;
  const verifyResponse = await fetch(`https://emailverification.whoisxmlapi.com/api/v2?apiKey=${key}&emailAddress=${email}`);
  if (verifyResponse.status === 402) throw "Out of API calls"; // save anyways

  const verifyResult = await verifyResponse.json();
  
  if (verifyResult.formatCheck === "false") throw "invalid email format";
  if (verifyResult.smtpCheck === "false") throw "email not deliverable";
  if (verifyResult.dnsCheck === "false") throw "email domain invalid";
  if (verifyResult.disposableCheck === "false") throw "email is disposable";

  res.status(200).end();
}
