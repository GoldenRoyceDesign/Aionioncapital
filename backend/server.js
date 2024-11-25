const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(express.json());

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Endpoint to send OTP
app.post('/sendOtp', async (req, res) => {
    const { mobile, email } = req.body;

    if (!mobile || !email) {
        return res.status(400).send('Mobile and email are required.');
    }

    try {
        // Send OTP via Twilio Verify Service
        await twilioClient.verify.services(process.env.TWILIO_SERVICE_SID)
            .verifications.create({
                to: mobile, // Mobile number with country code
                channel: 'sms', // Channel: sms, call, or email
            });

        console.log(`SMS OTP sent to ${mobile}`);

        // Send OTP to email (Nodemailer)
        const otp = '123456'; // Optional, if you want to send the same OTP by email
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
app.post('/verifyOtp', async (req, res) => {
    const { mobile, otp } = req.body;

    if (!mobile || !otp) {
        return res.status(400).send('Mobile and OTP are required.');
    }

    try {
        // Verify OTP via Twilio Verify Service
        const verification = await twilioClient.verify.services(process.env.TWILIO_SERVICE_SID)
            .verificationChecks.create({
                to: mobile,
                code: otp, // The OTP to verify
            });

        if (verification.status === 'approved') {
            res.status(200).send('OTP verified successfully!');
        } else {
            res.status(400).send('Invalid OTP or OTP expired.');
        }
    } catch (err) {
        console.error('Error verifying OTP:', err);
        res.status(500).send('Error verifying OTP');
    }
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
