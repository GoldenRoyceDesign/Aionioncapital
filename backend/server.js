const express = require('express');
const twilio = require('twilio');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an app-specific password if required
    },
});

app.use(express.json());

// OTP storage (in-memory for simplicity, use Redis or a database for production)
let otpStore = {};

// Generate OTP function
const generateOtp = () => Math.floor(100000 + Math.random() * 900000); // 6-digit OTP

// Endpoint to send OTP to mobile and email
app.post('/sendOtp', async (req, res) => {
    const { mobile, email } = req.body;

    if (!mobile || !email) {
        return res.status(400).send('Mobile and email are required.');
    }

    const otp = generateOtp();
    const expiry = Date.now() + 5 * 60 * 1000; // OTP expiry time: 5 minutes

    // Store OTP and expiry time for both mobile and email
    otpStore[mobile] = { otp, expiry };
    otpStore[email] = { otp, expiry };

    try {
        // Send OTP to mobile (Twilio)
        await twilioClient.messages.create({
            body: `Your OTP is: ${otp}`,
            from: process.env.TWILIO_PHONE_NUMBER,
            to: mobile,
        });

        console.log(`SMS sent to ${mobile}`);

        // Send OTP to email (Nodemailer)
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP for verification',
            text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
        };

        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);

        res.status(200).send('OTP sent successfully!');
    } catch (err) {
        console.error('Error sending OTP:', err);
        res.status(500).send('Error sending OTP');
    }
});

// Endpoint to verify OTP
app.post('/verifyOtp', (req, res) => {
    const { mobile, email, otp } = req.body;

    if (!mobile || !email || !otp) {
        return res.status(400).send('Mobile, email, and OTP are required.');
    }

    const mobileOtp = otpStore[mobile];
    const emailOtp = otpStore[email];

    // Check OTP for both mobile and email
    if (
        mobileOtp &&
        emailOtp &&
        mobileOtp.otp === otp &&
        emailOtp.otp === otp &&
        Date.now() < mobileOtp.expiry &&
        Date.now() < emailOtp.expiry
    ) {
        res.status(200).send('OTP verified successfully!');
    } else {
        res.status(400).send('Invalid OTP or OTP has expired.');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
