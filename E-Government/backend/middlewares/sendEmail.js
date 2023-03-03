const nodemailer = require('nodemailer')


exports.sendEmail = async(options)=>{

    const transporter = nodemailer.createTransport({
        
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "26f6d7d5d901c2",
              pass: "7655f8cce8aac0"
            }
    })

    const mailOption ={
        from: '26f6d7d5d901c2',
        to:options.email,
        subject:options.subject,
        text:options.message,
    }

    await transporter.sendMail(mailOption);
}