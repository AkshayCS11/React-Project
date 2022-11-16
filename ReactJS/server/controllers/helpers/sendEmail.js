import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: "sreehari.cr@upsmartsolutions.com",
    pass: "Ohmygod@16",
    clientId: "141790582063-elnhisvuj43s0ua6jba6a6gktpbl7olv.apps.googleusercontent.com",
    clientSecret: "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",
    refreshToken: "1//04dDmNhubx2xtCgYIARAAGAQSNwF-L9Iru8sWBt4S-Y9mXgT1H2eW4K06gQPGSQDBTytcNXRHkRcd5ECmAz8333f15ge3jMkI5V8"
  }
});

export const  sendmail = (email, code) =>{
  // console.log(email,code);
  const mailOptions = {
    from: 'sreehari.cr@upsmartsolutions.com',
    to: email,
    subject: 'Verification Code',
    text: `Your activation code is`,
    // text: code,
    html: `<a href="https://upsmartreactproject.netlify.app/activate">Activation link</a> <p>Verification code : ${code}</p>`  
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
   }
  });
}