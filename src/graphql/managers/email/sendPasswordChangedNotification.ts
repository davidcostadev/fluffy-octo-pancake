import { DateTime } from 'luxon';

import lang from 'lang';

import { sendEmail } from './sendEmail';

interface PasswordChangedNotification {
  firstName: string;
  email: string;
}

export const sendPasswordChangedNotification = ({ firstName, email }: PasswordChangedNotification) => {
  const zonedDate = DateTime.now().setZone('America/New_York').toFormat('dd/MM/yyyy HH:mm:ss');

  sendEmail({
    to: email,
    subject: `Password Change on ${lang.project.name}`,
    text: `Hello ${firstName},
Your password was successfully changed on ${lang.project.name} on ${zonedDate}.
If you do not recognize this action, please contact us immediately.
\nRegards, ${lang.project.name}`,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333; padding: 20px; max-width: 600px; margin: auto;">
        <h2 style="color: #333333;">Hello ${firstName},</h2>
        <p style="color: #333333;">Your password was successfully changed on ${lang.project.name} on ${zonedDate}.</p>
        <p style="color: #333333;">If you do not recognize this action, please contact us immediately.</p>
        <p style="color: #333333;">Regards, ${lang.project.name}</p>
    </div>
  `,
  });
};
