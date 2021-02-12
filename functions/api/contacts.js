const functions = require("firebase-functions");
const {Router} = require("express");
const nodemailer = require("nodemailer");

// eslint-disable-next-line new-cap
module.exports = Router()
    .post("/", (req, res) => {
      const obj = JSON.parse(req.body);
      const {
        name,
        email,
        message,
      } = obj;

      sendEmail(name, email, message);
      res.status(200).send({isEmailSend: true});
    });

const sendEmail = (name, email, message) => {
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password,
    },
  });

  mailTransport.sendMail({
    from: email,
    replyTo: email,
    to: functions.config().gmail.email,
    subject: name,
    text: message,
    html: `<p>${message}</p>`,
  }, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
