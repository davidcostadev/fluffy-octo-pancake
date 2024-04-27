import lang from 'lang';

import { sendEmail } from './sendEmail';

const { WEBSITE_DOMAIN = 'http://localhost:3000' } = process.env;

interface ChangePassword {
  firstName: string;
  email: string;
  hash: string;
}

export const sendChangePasswordRequest = ({ firstName, email, hash }: ChangePassword) =>
  sendEmail({
    to: email,
    subject: 'Change Password',
    text: `Hello ${firstName},
We received a request to change your password. Please use this link ${WEBSITE_DOMAIN}/auth/change-password/${hash} to create a new password.
If you did not make this request, please disregard this email.
\nRegards, ${lang.project.name}`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; padding: 20px; max-width: 600px; margin: auto;">
        <h2 style="color: #333333;">Hello ${firstName},</h2>
        <p style="color: #333333;">We received a request to change your password. Please <a href="${WEBSITE_DOMAIN}/auth/change-password/${hash}" target="_blank" style="color: #007bff;">click here</a> or use this link ${WEBSITE_DOMAIN}/auth/change-password/${hash} to create a new password.</p>
        <p style="color: #333333;">If you did not make this request, please disregard this email.</p>
        <p style="color: #333333;">Regards, ${lang.project.name}</p>
    </div>
  `,
  });
