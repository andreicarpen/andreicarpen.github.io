// pages/api/contact.js

import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Nodemailer setup with environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Route to handle POST requests to '/api/contact'
router.post('/', async (req, res) => {
  // Your logic to handle form data and send emails
  const { fullName, email, subject, message } = req.body;

  // Validate the input
  if (!fullName || !email || !subject || !message) {
    return res.status(400).send('All fields are required.');
  }

  // Set up email data
  let mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: 'andreicarpen@gmail.com', // list of receivers
    subject: `New contact from ${fullName}`, // Subject line
    text: `You have a new contact from:\nName: ${fullName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`, // plain text body
    html: `<b>You have a new contact from:</b>
    <p>Name: ${fullName}</p>
    <p>Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>` // html body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email: ' + error.message);
    }
    res.status(200).send('Email sent successfully: ' + info.response);
  });
});

export default router;