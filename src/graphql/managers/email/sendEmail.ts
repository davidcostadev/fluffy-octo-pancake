import nodemailer from 'nodemailer';

const {
  EMAIL_HOST = '',
  EMAIL_PORT = '',
  EMAIL_USER = '',
  EMAIL_PASSWORD = '',
  EMAIL_FROM = 'David Costa <davidcostadev@gmail.com>',
  ENABLE_SEND_EMAIL,
} = process.env;

const transport = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: parseInt(EMAIL_PORT, 10),
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASSWORD,
  },
});

type SendEmailProps = Parameters<typeof transport.sendMail>[0];

export const sendEmail = async ({ to, subject, text, html }: Omit<SendEmailProps, 'from'>) => {
  if (ENABLE_SEND_EMAIL !== 'true') {
    return;
  }

  return await transport.sendMail({
    from: EMAIL_FROM,
    to: to,
    subject,
    text,
    html,
  });
};
