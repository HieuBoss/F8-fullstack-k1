const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "duyhieu06112003@gmail.com",
    pass: "uuyv xeqg skko tczf",
  },
});
const sendMail = async (to, subject, message) => {
  const info = await transporter.sendMail({
    from: '"F8 Education" <duyhieu06112003@gmail.com>', // sender address
    to, // list of receivers
    subject, // Subject line
    html: message, // html body
  });
};
module.exports = sendMail;
