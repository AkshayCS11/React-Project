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

export const  sendmailPassword = (email, code) =>{
  // console.log(email,code);
  const mailOptions = {
    from: 'sreehari.cr@upsmartsolutions.com',
    to: email,
    subject: 'Verification Code for reset password',
    text: `Your activation code is`,
    // text: code,
    html: `<a href="https://upsmartreactproject.netlify.app/resetpassword">Reset password link</a> <p>Verification code : ${code}</p>`  
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}


// import sendgrid from '@sendgrid/mail';

//     const SENDGRID_API_KEY = "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"

//     sendgrid.setApiKey(SENDGRID_API_KEY)

//     export const  sendmail = (email, code) =>{

//       const msg = {
//         to: email,
//       // Change to your recipient
//         from: 'sreeharicr786@gmail.com',
//       // Change to your verified sender
//         subject: 'Activate your account',
//         text: "code",
//         html: '<strong>`Activation code` </strong>',
//       }
//       sendgrid
//         .send(msg)
//         .then((resp) => {
//           console.log('Email sent\n', resp)
//         })
//         .catch((error) => {
//           console.error(error)
//       })
//     }