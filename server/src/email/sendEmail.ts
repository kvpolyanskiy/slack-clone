import nodemailer from 'nodemailer';

export const sendEmail = async (email: string, url: string, subject: string) => {
  const auth = process.env.NODE_ENV === 'development'
    ? await nodemailer.createTestAccount()
    : {
      user: process.env.EMAIL_TRANSPORT_USER,
      pass: process.env.EMAIL_TRANSPORT_PASSWORD,
    };

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_TRANSPORT_HOST,
    port: Number(process.env.EMAIL_TRANSPORT_PORT),
    secure: Boolean(process.env.EMAIL_TRANSPORT_SECURE), // true for 465, false for other ports
    auth,
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Slack Clone 👻" <slack-clone@example.com>', // sender address
    to: email,
    subject,
    html: `<a href="${url}">${url}</a>`,
  });

  if (process.env.NODE_ENV === 'development') {
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
};
