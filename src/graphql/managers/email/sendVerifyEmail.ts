import lang from 'lang';

import { sendEmail } from './sendEmail';

const { WEBSITE_DOMAIN = 'https://localhost:3000' } = process.env;

interface VerifyEmail {
  firstName: string;
  email: string;
  hash: string;
}

export const sendVerifyEmail = ({ firstName, email, hash }: VerifyEmail) =>
  sendEmail({
    to: email,
    subject: 'Verify your email',
    text: `Hello ${firstName}\n
please, you need to verify your email.
click here ${WEBSITE_DOMAIN}/auth/verify/${hash}
\natt: ${lang.project.name}`,
    html: `
        <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; padding: 20px; max-width: 600px; margin: auto;">
        <h2 style="color: #333333;">Hello ${firstName},</h2>
        <p style="color: #333333;">Please, you need to check your email</p>
        <a href="${WEBSITE_DOMAIN}/auth/verify/${hash}" style="display: inline-block; padding: 10px 20px; margin-top: 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; transition: background-color 0.3s;">Click here</a>
        <p style="color: #333333;">or using this link:</p>
        <a href="${WEBSITE_DOMAIN}/auth/verify/${hash}" style="color: #007bff;">${WEBSITE_DOMAIN}/auth/verify/${hash}</a>
        <p style="color: #333333;">att: ${lang.project.name}</p>
    </div>
    `,
  });
