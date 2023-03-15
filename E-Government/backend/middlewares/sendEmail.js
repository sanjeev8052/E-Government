const nodemailer = require('nodemailer')


exports.sendEmail = async (options) => {

  const transporter = nodemailer.createTransport({

    service: "gmail",
    auth: {
      user: 'fp9838948@gmail.com',
      pass: 'pluzgbnukebhgwpi'

      // host: "sandbox.smtp.mailtrap.io",
      // port: 2525,
      // auth: {
      //   user: "26f6d7d5d901c2",
      //   pass: "7655f8cce8aac0"
      }
    })

  const mailOption = {
     from: 'fp9838948@gmail.com',
    // from: "26f6d7d5d901c2",
    to: options.email,
    subject: options.subject,
    text: options.message,
  }

  await transporter.sendMail(mailOption);
}