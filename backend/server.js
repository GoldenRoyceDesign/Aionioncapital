


// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const twilio = require('twilio');
// const dotenv = require('dotenv');
// const cors = require('cors');
// dotenv.config();

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));

// // Retrieve sensitive values from environment variables
// const EMAIL_USER = process.env.EMAIL_USER;
// const EMAIL_PASS = process.env.EMAIL_PASS;
// const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
// const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
// const TWILIO_PHONE_NUMBER = process.env.TWILIO_PHONE_NUMBER;
// const TWILIO_SERVICE_SID = process.env.TWILIO_SERVICE_SID;  // Make sure this is defined

// // Temporary storage for OTPs (use a database for production)
// const otpStorage = {};

// // Create Nodemailer transporter
// const emailTransporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: EMAIL_USER,
//         pass: EMAIL_PASS,
//     },
// });

// // Helper function to generate OTP
// const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// // Endpoint to send OTPs via email and SMS
// app.post('/send-otp', async (req, res) => {
//     const { email, phone } = req.body;
//     if (!email || !phone) {
//         return res.status(400).json({ success: false, error: 'Email and phone number are required.' });
//     }

//     try {
//         // Generate OTP for email
//         const emailOtp = generateOtp();
//         otpStorage[email] = emailOtp;  // Store email OTP in memory (or DB)
        
//         // Send Email OTP (via email service like Nodemailer)
//         await emailTransporter.sendMail({
//             from: EMAIL_USER,
//             to: email,
//             subject: 'Your OTP',
//             text: `Your OTP is: ${emailOtp}`,
//         });

//         // Send phone OTP via Twilio
//         const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
//         const twilioResponse = await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
//             .verifications.create({ to: phone, channel: 'sms' });

//         // Respond with both OTPs (optional for debugging, don't send actual OTPs to client in production)
//         res.status(200).json({
//             success: true,
//             emailOtp: emailOtp,   // Send email OTP in response (only for debugging, not in production)
//             phoneOtpSid: twilioResponse.sid // Optional for debugging
//         });
//     } catch (error) {
//         console.error('Error sending OTP:', error.message);
//         res.status(500).json({ success: false, error: 'Failed to send OTP.' });
//     }
// });










// app.post('/verify-otp', (req, res) => {
//     const { email, phone, emailOtp, phoneOtp } = req.body;

//     if (emailOtp) {
//         // Validate the email OTP
//         if (otpStorage[email] !== emailOtp) {
//             return res.status(400).json({ success: false, message: 'Invalid email OTP' });
//         }
//         return res.json({ success: true, message: 'Email OTP verified successfully.' });
//     }

//     if (phoneOtp) {
//         // Validate the phone OTP using Twilio
//         const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
//         twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
//             .verificationChecks.create({ to: phone, code: phoneOtp })
//             .then((verificationCheck) => {
//                 if (verificationCheck.status !== 'approved') {
//                     return res.status(400).json({ success: false, message: 'Invalid phone OTP' });
//                 }
//                 return res.json({ success: true, message: 'Phone OTP verified successfully.' });
//             })
//             .catch((error) => {
//                 console.error('Twilio error:', error);
//                 return res.status(500).json({ success: false, message: 'Error verifying phone OTP' });
//             });
//     }
// });




// // Start the server
// app.listen(5000, () => {
//     console.log('Server running on port 5000');
// });




// // // Endpoint to verify OTP
// // app.post('/verify-otp', (req, res) => {
// //     const { email, phone, emailOtp, phoneOtp } = req.body;

// //     // Validate the email OTP
// //     if (otpStorage[email] !== emailOtp) {
// //         return res.status(400).json({ success: false, message: 'Invalid email OTP' });
// //     }

// //     // Validate the phone OTP using Twilio (check with Twilio SID)
// //     const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// //     twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
// //         .verificationChecks.create({ to: phone, code: phoneOtp })
// //         .then((verificationCheck) => {
// //             if (verificationCheck.status !== 'approved') {
// //                 return res.status(400).json({ success: false, message: 'Invalid phone OTP' });
// //             }
            
// //             // Both OTPs are valid, proceed with user registration or success
// //             return res.json({ success: true, message: 'OTP verified successfully!' });
// //         })
// //         .catch((error) => {
// //             console.error('Twilio error:', error);
// //             return res.status(500).json({ success: false, message: 'Error verifying phone OTP' });
// //         });
// // });


// // app.post('/send-otp-login', async (req, res) => {
// //     const { email, phone } = req.body;

// //     if (!email && !phone) {
// //         return res.status(400).json({ success: false, error: 'Either email or phone number is required.' });
// //     }

// //     try {
// //         if (email) {
// //             // Generate and send email OTP
// //             const emailOtp = generateOtp();
// //             otpStorage[email] = emailOtp;
// //             await emailTransporter.sendMail({
// //                 from: EMAIL_USER,
// //                 to: email,
// //                 subject: 'Your OTP for Login',
// //                 text: `Your OTP is: ${emailOtp}`,
// //             });
// //         }

// //         if (phone) {
// //             // Generate and send phone OTP
// //             const twilioClient = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
// //             await twilioClient.verify.v2.services(TWILIO_SERVICE_SID)
// //                 .verifications.create({ to: phone, channel: 'sms' });
// //         }

// //         res.status(200).json({ success: true, message: 'OTP sent for login.' });
// //     } catch (error) {
// //         console.error('Error sending OTP:', error.message);
// //         res.status(500).json({ success: false, error: 'Failed to send OTP.' });
// //     }
// // });



const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// Setup Express
const app = express();
const PORT = 5000;

// Middlewares
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'AionionCapital',
    password: '*lfUtj3G#k7',
    database: 'AiLogin'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Register (Signup)
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Store in database
        db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: 'Error signing up user' });
            }
            // On success, send back success message
            res.status(201).json({ message: 'User registered successfully', redirectTo: '/dashboard' });
        });
    } catch (err) {
        res.status(500).json({ message: 'Error hashing password' });
    }
});

// Login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error checking user' });
        }

        if (result.length === 0) {
            return res.status(400).json({ message: 'User not found' });
        }

        const user = result[0];

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, email: user.email }, 'your_jwt_secret_key', { expiresIn: '1h' });

        // Send success response with token
        res.status(200).json({ message: 'Login successful', token });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
