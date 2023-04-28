var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'gmail.com',
  to: 'anabiisreal@gmail.com',
  subject: 'ola',
  text: 'https://static.wikia.nocookie.net/viloes/images/e/e0/Jeff_the_Killer.webp/revision/latest/thumbnail/width/360/height/360?cb=20220603192746&path-prefix=pt-br'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});