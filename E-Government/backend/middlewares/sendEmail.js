const nodemailer = require('nodemailer')


exports.sendEmail = async(options)=>{

    const transporter = nodemailer.createTransport({
        
            host: "gamil.com",
            auth: {
              user: "sanjeevgaund2002@gmail.com",
              pass: "Sanjeevkr@8052"
            }
    })

    const mailOption ={
        from: 'sanjeevgaund2002@gmail.com"',
        to:options.email,
        subject:options.subject,
        text:options.message,
    }

    await transporter.sendMail(mailOption);
}