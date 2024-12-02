


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
const nodemailer = require('nodemailer');
const twilio = require('twilio');
const dotenv = require('dotenv');
const crypto = require('crypto');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database');
});

// Email and SMS OTP functions
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
}

// Endpoint to send email OTP
app.post('/send-email-otp', (req, res) => {
  const { email } = req.body;
  const otp = generateOtp();

  db.query('UPDATE users SET email_otp = ?, email_verified = FALSE WHERE email = ?', [otp, email], (err) => {
    if (err) {
      return res.status(500).send('Error saving OTP to database');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).send('Error sending OTP via email');
      }
      res.send('OTP sent to email');
    });
  });
});

// Endpoint to send phone OTP
app.post('/send-phone-otp', (req, res) => {
  const { phone } = req.body;
  const otp = generateOtp();

  db.query('UPDATE users SET phone_otp = ?, phone_verified = FALSE WHERE phone = ?', [otp, phone], (err) => {
    if (err) {
      return res.status(500).send('Error saving OTP to database');
    }

    twilioClient.messages.create({
      body: `Your OTP code is: ${otp}`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    })
    .then(message => res.send('OTP sent to phone'))
    .catch(err => res.status(500).send('Error sending OTP via SMS'));
  });
});

// Endpoint to verify email OTP
app.post('/verify-email-otp', (req, res) => {
  const { email, otp } = req.body;

  db.query('SELECT email_otp FROM users WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send('Email not found');
    }

    const storedOtp = results[0].email_otp;
    if (storedOtp === otp) {
      db.query('UPDATE users SET email_verified = TRUE WHERE email = ?', [email], (updateErr) => {
        if (updateErr) {
          return res.status(500).send('Error updating email verification status');
        }
        res.send('Email verified successfully');
      });
    } else {
      res.status(400).send('Invalid OTP');
    }
  });
});

// Endpoint to verify phone OTP
app.post('/verify-phone-otp', (req, res) => {
  const { phone, otp } = req.body;

  db.query('SELECT phone_otp FROM users WHERE phone = ?', [phone], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send('Phone number not found');
    }

    const storedOtp = results[0].phone_otp;
    if (storedOtp === otp) {
      db.query('UPDATE users SET phone_verified = TRUE WHERE phone = ?', [phone], (updateErr) => {
        if (updateErr) {
          return res.status(500).send('Error updating phone verification status');
        }
        res.send('Phone verified successfully');
      });
    } else {
      res.status(400).send('Invalid OTP');
    }
  });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

