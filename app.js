const express = require("express");
require("dotenv").config();
const nodemailer = require("nodemailer");
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors())

// Create a Nodemailer transporter with your email service provider's settings
const transporter = nodemailer.createTransport({
  // Configure your email service provider settings here
  service: "gmail",
  auth: {
    user: "awaisweb4@gmail.com",
    pass: "foqesciiohulpnfa",
  },
});

app.post("/sendEmail", async (req, res) => {
    
  const { firstName, lastName, companyName, toEmail, phone, message } =
    req.body;

  try {
    // Compose the email content
    const emailContent = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Company Name: ${companyName}
        Your work email: ${toEmail}
        Phone: ${phone}
        Message: ${message}
      `;

    // Send the email
    await transporter.sendMail({
      from: "awaisweb4@gmail.com", // Replace with your email address
      to: `${req.body.toEmail}, "awaisweb4@gmail.com`, // Replace with the recipient's email address
      subject: "Newslatter Form Submission",
      text: emailContent,
    });

    res.json({ message: "Email sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Error sending email." });
  }
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is Runing on " + port);
});
