import lang from 'lang';

import { sendEmail } from './sendEmail';

interface WelcomeMessage {
  firstName: string;
  email: string;
}

export const sendWelcomeMessage = ({ firstName, email }: WelcomeMessage) =>
  sendEmail({
    to: email,
    subject: `Welcome to ${lang.project.name}`,
    text: `Hello ${firstName},
Thank you for completing your registration. We hope you enjoy using ${lang.project.name}.
Regards, ${lang.project.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; padding: 20px; max-width: 600px; margin: auto;">
          <h2 style="color: #333333;">Hello ${firstName},</h2>
          <p style="color: #333333;">Thank you for completing your registration. We hope you enjoy using ${lang.project.name}.</p>
          <p style="color: #333333;">Regards, ${lang.project.name}</p>
      </div>
    `,
  });
