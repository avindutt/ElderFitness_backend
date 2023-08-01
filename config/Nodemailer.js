const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');

// transporter handles the actual delivery of the email message to the email server.
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'avindutt2369',
    pass: 'imhblbhaamodofxi'
  }
});

module.exports = {
    transporter,
}