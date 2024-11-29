// const express = require('express');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const cors = require('cors');
// dotenv.config();

// const app = express();
// const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// app.use(express.json());
// app.use(cors()); // Allow cross-origin requests

// // Configure Nodemailer
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//     },
// });

// // Endpoint to send OTP
// app.post('/sendOtp', async (req, res) => {
//     const { mobile, email } = req.body;

//     if (!mobile && !email) {
//         return res.status(400).send('At least one of Mobile or Email is required.');
//     }
    

//     try {
//         if (mobile) {
//             try {
//                 const twilioResponse = await twilioClient.verify.v2.services(
//                     process.env.TWILIO_SERVICE_SID
//                 ).verifications.create({ to: mobile, channel: 'sms' });
//                 console.log(`SMS OTP sent to ${mobile}:`, twilioResponse);
//             } catch (err) {
//                 console.error('Twilio error:', err);
//                 return res.status(500).json({ message: 'Failed to send SMS OTP.' });
//             }
//         }
        

//         if (email) {
//             // Generate OTP for email
//             const otp = Math.floor(1000 + Math.random() * 9000).toString(); // 6-digit OTP

//             // Send OTP via email
//             const mailOptions = {
//                 from: process.env.EMAIL_USER,
//                 to: email,
//                 subject: 'Your OTP for verification',
//                 text: `Your OTP is: ${otp}. It will expire in 5 minutes.`,
//             };

//             await transporter.sendMail(mailOptions);
//             console.log(`Email OTP sent to ${email}`);
//         }

//         res.status(200).json({ message: 'OTP sent successfully!' });
//     } catch (err) {
//         console.error('Error sending OTP:', err);
//         res.status(500).json({ message: 'Error sending OTP' });
//     }
// });




// // Endpoint to verify OTP
// app.post('/verifyOtp', async (req, res) => {
//     const { mobile, email, otp } = req.body;

//     if (!otp || (!mobile && !email)) {
//         return res.status(400).send('Mobile or Email and OTP are required.');
//     }

//     try {
//         if (mobile) {
//             // Verify OTP via Twilio for mobile
//             const verification = await twilioClient.verify
//                 .services(process.env.TWILIO_SERVICE_SID)
//                 .verificationChecks.create({
//                     to: mobile,
//                     code: otp,
//                 });

//             if (verification.status === 'approved') {
//                 return res.status(200).send('Mobile OTP verified successfully!');
//             } else {
//                 return res.status(400).send('Invalid Mobile OTP or OTP expired.');
//             }
//         }

//         if (email) {
//             // Add your email OTP verification logic here (e.g., using an email OTP service)
//             const isEmailOtpValid = await verifyEmailOtp(email, otp);

//             if (isEmailOtpValid) {
//                 return res.status(200).send('Email OTP verified successfully!');
//             } else {
//                 return res.status(400).send('Invalid Email OTP or OTP expired.');
//             }
//         }
//     } catch (err) {
//         console.error('Error verifying OTP:', err);
//         res.status(500).send('Error verifying OTP');
//     }
// });



// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });





const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Retrieve sensitive values from environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;  // Make sure this is defined

// Temporary storage for OTPs (use a database for production)
const otpStorage = {};

// Create Nodemailer transporter
const emailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
    },
});

// Helper function to generate OTP
const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// Endpoint to send OTPs via email and SMS
app.post('/send-otp', async (req, res) => {
    const { email, phone } = req.body;
    if (!email || !phone) {
        return res.status(400).json({ success: false, error: 'Email and phone number are required.' });
    }

    try {
        // Generate OTP for email
        const emailOtp = generateOtp();
        otpStorage[email] = emailOtp;  // Store email OTP in memory (or DB)
        
        // Send Email OTP (via email service like Nodemailer)
        await emailTransporter.sendMail({
            from: EMAIL_USER,
            to: email,
            subject: 'Your OTP',
            text: `Your OTP is: ${emailOtp}`,
        });

        // Send phone OTP via Twilio
        const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        const twilioResponse = await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
            .verifications.create({ to: phone, channel: 'sms' });

        // Respond with both OTPs (optional for debugging, don't send actual OTPs to client in production)
        res.status(200).json({
            success: true,
            emailOtp: emailOtp,   // Send email OTP in response (only for debugging, not in production)
            phoneOtpSid: twilioResponse.sid // Optional for debugging
        });
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        res.status(500).json({ success: false, error: 'Failed to send OTP.' });
    }
});




// // Endpoint to verify OTP
// app.post('/verify-otp', (req, res) => {
//     const { email, phone, emailOtp, phoneOtp } = req.body;

//     // Validate the email OTP
//     if (otpStorage[email] !== emailOtp) {
//         return res.status(400).json({ success: false, message: 'Invalid email OTP' });
//     }

//     // Validate the phone OTP using Twilio (check with Twilio SID)
//     const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
//     twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
//         .verificationChecks.create({ to: phone, code: phoneOtp })
//         .then((verificationCheck) => {
//             if (verificationCheck.status !== 'approved') {
//                 return res.status(400).json({ success: false, message: 'Invalid phone OTP' });
//             }
            
//             // Both OTPs are valid, proceed with user registration or success
//             return res.json({ success: true, message: 'OTP verified successfully!' });
//         })
//         .catch((error) => {
//             console.error('Twilio error:', error);
//             return res.status(500).json({ success: false, message: 'Error verifying phone OTP' });
//         });
// });


app.post('/send-otp-login', async (req, res) => {
    const { email, phone } = req.body;

    if (!email && !phone) {
        return res.status(400).json({ success: false, error: 'Either email or phone number is required.' });
    }

    try {
        if (email) {
            // Generate and send email OTP
            const emailOtp = generateOtp();
            otpStorage[email] = emailOtp;
            await emailTransporter.sendMail({
                from: EMAIL_USER,
                to: email,
                subject: 'Your OTP for Login',
                text: `Your OTP is: ${emailOtp}`,
            });
        }

        if (phone) {
            // Generate and send phone OTP
            const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
            await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
                .verifications.create({ to: phone, channel: 'sms' });
        }

        res.status(200).json({ success: true, message: 'OTP sent for login.' });
    } catch (error) {
        console.error('Error sending OTP:', error.message);
        res.status(500).json({ success: false, error: 'Failed to send OTP.' });
    }
});





app.post('/verify-otp', (req, res) => {
    const { email, phone, emailOtp, phoneOtp } = req.body;

    if (emailOtp) {
        // Validate the email OTP
        if (otpStorage[email] !== emailOtp) {
            return res.status(400).json({ success: false, message: 'Invalid email OTP' });
        }
        return res.json({ success: true, message: 'Email OTP verified successfully.' });
    }

    if (phoneOtp) {
        // Validate the phone OTP using Twilio
        const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
        twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
            .verificationChecks.create({ to: phone, code: phoneOtp })
            .then((verificationCheck) => {
                if (verificationCheck.status !== 'approved') {
                    return res.status(400).json({ success: false, message: 'Invalid phone OTP' });
                }
                return res.json({ success: true, message: 'Phone OTP verified successfully.' });
            })
            .catch((error) => {
                console.error('Twilio error:', error);
                return res.status(500).json({ success: false, message: 'Error verifying phone OTP' });
            });
    }
});




// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
