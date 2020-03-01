"use strict";
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtp.163.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'lixunsam@163.com', // generated ethereal user
    pass: 'linux0410' // generated ethereal password
  }
});

let mailObj = {
  from: '"Fred Foo 👻" <lixunsam@163.com>', // sender address
  to: "3066765560@qq.com", // list of receivers
  subject: "dear honey", // Subject line
  // text: "Hello world?", // plain text body
  text: '我爱你', // plain text body
  // html: "<b>曾园艺,我爱你❤</b>" // html body
}

/*setInterval(() => {
  transporter.sendMail(mailObj);
},1000)*/

transporter.sendMail(mailObj, (err, data) => {
  console.log(err)
  console.log(data)
});
