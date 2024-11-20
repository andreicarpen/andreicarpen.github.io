import express from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/express/index.js';
import nodemailer from 'file:///Users/andrei/Documents/GitHub/andreicarpen.github.io/andreicarpen.github.io/node_modules/nodemailer/lib/nodemailer.js';

const router = express.Router();
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
router.post("/", async (req, res) => {
  const { fullName, email, subject, message } = req.body;
  if (!fullName || !email || !subject || !message) {
    return res.status(400).send("All fields are required.");
  }
  let mailOptions = {
    from: process.env.EMAIL_USER,
    // sender address
    to: "andreicarpen@gmail.com",
    // list of receivers
    subject: `New contact from ${fullName}`,
    // Subject line
    text: `You have a new contact from:
Name: ${fullName}
Email: ${email}
Subject: ${subject}
Message: ${message}`,
    // plain text body
    html: `<b>You have a new contact from:</b>
    <p>Name: ${fullName}</p>
    <p>Email: ${email}</p>
    <p>Subject: ${subject}</p>
    <p>Message: ${message}</p>`
    // html body
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send("Error sending email: " + error.message);
    }
    res.status(200).send("Email sent successfully: " + info.response);
  });
});

export { router as default };
//# sourceMappingURL=contact-DWbe9IpR.mjs.map
