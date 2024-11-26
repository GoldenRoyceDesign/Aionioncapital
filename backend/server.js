const express = require('express');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

app.use(express.json());
app.use(cors()); // Allow cross-origin requests

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

    if (!mobile && !email) {
        return res.status(400).send('Mobile or Email is required.');
    }

    try {
        if (mobile) {
            // Send OTP via Twilio (SMS)
            const twilioResponse = await twilioClient.verify
                .services(process.env.TWILIO_SERVICE_SID)
                .verifications.create({
                    to: mobile,
                    channel: 'sms',
                });

            console.log(`SMS OTP sent to ${mobile}:`, twilioResponse);
        }

        if (email) {
            // Generate OTP for email
            const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 6-digit OTP

            // Send OTP via email
            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: 'Your OTP for verification',
                text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
            };

            await transporter.sendMail(mailOptions);
            console.log(`Email OTP sent to ${email}`);
        }

        res.status(200).json({ message: 'OTP sent successfully!' });
    } catch (err) {
        console.error('Error sending OTP:', err);
        res.status(500).json({ message: 'Error sending OTP' });
    }
});




// Endpoint to verify OTP
app.post('/verifyOtp', async (req, res) => {
    const { mobile, email, otp } = req.body;

    if (!otp || (!mobile && !email)) {
        return res.status(400).send('Mobile or Email and OTP are required.');
    }

    try {
        if (mobile) {
            // Verify OTP via Twilio for mobile
            const verification = await twilioClient.verify
                .services(process.env.TWILIO_SERVICE_SID)
                .verificationChecks.create({
                    to: mobile,
                    code: otp,
                });

            if (verification.status === 'approved') {
                return res.status(200).send('Mobile OTP verified successfully!');
            } else {
                return res.status(400).send('Invalid Mobile OTP or OTP expired.');
            }
        }

        if (email) {
            // Add your email OTP verification logic here (e.g., using an email OTP service)
            const isEmailOtpValid = await verifyEmailOtp(email, otp);

            if (isEmailOtpValid) {
                return res.status(200).send('Email OTP verified successfully!');
            } else {
                return res.status(400).send('Invalid Email OTP or OTP expired.');
            }
        }
    } catch (err) {
        console.error('Error verifying OTP:', err);
        res.status(500).send('Error verifying OTP');
    }
});



// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
