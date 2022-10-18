import nodemailer from 'nodemailer'
export const  sendmail = (email, code) =>{

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akshay.cs@upsmartsolutions.com',
    pass: 'AkshayCS@1995'
  }
});

var mailOptions = {
  from: 'akshay.cs@upsmartsolutions.com',
  to: email,
  subject: 'Verification Code',
  text: code
  // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'        
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}