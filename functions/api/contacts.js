const functions = require("firebase-functions");
const {Router} = require("express");
const nodemailer = require("nodemailer");

// eslint-disable-next-line new-cap
module.exports = Router()
    .post("/", (req, res) => {
      sendEmail(req.body);
      res.status(200).send({isEmailSend: true});
    });

const sendEmail = (entry) => {
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password,
    },
  });

  const mailOptions = {
    from: entry.email,
    replyTo: entry.email,
    to: functions.config().gmail.email,
    subject: entry.name,
    text: entry.message,
    html: `<p>${entry.message}</p>`,
  };

  mailTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
