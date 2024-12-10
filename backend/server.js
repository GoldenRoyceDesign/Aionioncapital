


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



// const express = require('express');
// const mysql = require('mysql2');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // Setup Express
// const app = express();
// const PORT = 5000;

// // Enable CORS for all routes
// app.use(cors());

// // Middlewares
// app.use(bodyParser.json());


// // MySQL database connection pool
// const pool = mysql.createPool({
//     host: 'srv1473.hstgr.io',
//     user: 'u297469450_AionionCapital',
//     password: '*lfUtj3G#k7',
//     database: 'u297469450_AiLogin',
//     waitForConnections: true,
//     connectionLimit: 10, // Maximum number of connections in the pool
//     queueLimit: 0
// });

// // Register (Signup)
// app.post('/signup', async (req, res) => {
//     const { email, password, confirmPassword } = req.body;

//     // Check if email, password, and confirmPassword are provided
//     if (!email || !password || !confirmPassword) {
//         return res.status(400).json({ message: 'Email, password, and confirm password are required' });
//     }

//     // Check if password and confirmPassword match
//     if (password !== confirmPassword) {
//         return res.status(400).json({ message: 'Passwords do not match' });
//     }

//     try {
//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Store in database using pool.query
//         pool.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).json({ message: 'Error signing up user' });
//             }
//             // On success, send back success message
//             res.status(201).json({ message: 'User registered successfully', redirectTo: '/dashboard' });
//         });
//     } catch (err) {
//         res.status(500).json({ message: 'Error hashing password' });
//     }
// });



// // Login
// app.post('/login', (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ message: 'Email and password are required' });
//     }

//     // Query the database to find the user by email
//     pool.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
//         if (err) {
//             console.error('Error executing query:', err); // Log detailed error
//             return res.status(500).json({ message: 'Error checking user', error: err });
//         }

//         // If no user found
//         if (result.length === 0) {
//             return res.status(400).json({ message: 'User not found' });
//         }

//         // User found
//         const user = result[0]; // Get the user data

//         // Compare the entered password with the hashed password in the database
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials' });
//         }

//         // Password is correct, generate JWT token
//         const token = jwt.sign(
//             { id: user.id, email: user.email },  // Payload: user id and email
//             'W?w(1Sg%No$*gY#8qF{,',               // Secret key for signing the token
//             { expiresIn: '1h' }                  // Token expiration time
//         );

//         // Send success response with token
//         res.status(200).json({ message: 'Login successful', token });
//     });
// });


// // Middleware to verify JWT
// // Middleware to verify JWT
// const verifyToken = (req, res, next) => {
//     const token = req.headers['authorization'];

//     if (!token) {
//         return res.status(403).json({ message: 'No token provided' });
//     }

//     // Remove "Bearer " prefix from the token if present
//     const tokenWithoutBearer = token.startsWith('Bearer ') ? token.slice(7, token.length) : token;

//     jwt.verify(tokenWithoutBearer, 'W?w(1Sg%No$*gY#8qF{,', (err, decoded) => {
//         if (err) {
//             return res.status(401).json({ message: 'Failed to authenticate token' });
//         }
//         req.user = decoded; // Attach decoded payload (user info) to req
//         next();
//     });
// };


// // Protected route to get user info
// app.get('/user', verifyToken, (req, res) => {
//     // Extract user data from the decoded JWT
//     const { id, email } = req.user;
//     res.status(200).json({ id, email });
// });


// // API Endpoint to handle form submission
// app.post("/submit-profile", (req, res) => {
//     const data = req.body;

//     const query = `
//         INSERT INTO profiles 
//         (name, primaryLocation, secondaryLocation, whatsappNumber, profession, 
//         lifeInsurance, lifeInsuranceVehicle, teamInsurance, teamInsuranceVehicle, 
//         renewalDateLifeInsurance, renewalDateTeamInsurance, 
//         lifeInsuranceVehicleNumber, teamInsuranceVehicleNumber, 
//         renewalDateLifeInsuranceVehicle, renewalDateTeamInsuranceVehicle)
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//     const values = [
//         data.name,
//         data.primaryLocation,
//         data.secondaryLocation || null, // Handle optional fields
//         data.whatsappNumber,
//         data.profession || null, // Handle optional fields
//         data.lifeInsurance || false,
//         data.lifeInsuranceVehicle || false,
//         data.teamInsurance || false,
//         data.teamInsuranceVehicle || false,
//         data.renewalDateLifeInsurance || null,
//         data.renewalDateTeamInsurance || null,
//         data.lifeInsuranceVehicleNumber || null,
//         data.teamInsuranceVehicleNumber || null,
//         data.renewalDateLifeInsuranceVehicle || null, // New field
//         data.renewalDateTeamInsuranceVehicle || null  // New field
//     ];

//     pool.query(query, values, (err, result) => {
//         if (err) {
//             console.error("Failed to insert data:", err);
//             res.status(500).send("Failed to save profile.");
//             return;
//         }
//         res.status(200).send("Profile saved successfully.");
//     });
// });


// // POST endpoint to handle form submission
// app.post('/contactForm', (req, res) => {
//     const { name, email, phone, subject, message } = req.body;

//     // Validate required fields
//     if (!name || !email || !phone || !subject || !message) {
//         return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Insert form data into the MySQL database
//     const query = `INSERT INTO contact (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`;

//     pool.execute(query, [name, email, phone, subject, message], (err, result) => {
//         if (err) {
//             console.error('Error inserting data into the database:', err);
//             return res.status(500).json({ error: 'Error submitting data' });
//         }
//         console.log('Form data inserted:', result);
//         res.status(200).json({ message: 'Form data submitted successfully' });
//     });
// });


// // Route to return the logged-in user's profile
// app.get('/profile', verifyToken, (req, res) => {
//     console.log('Decoded JWT:', req.user); // Log the decoded user data
//     const userEmail = req.user.email;
//     res.status(200).json({ email: userEmail });
// });


// app.get("/api/kyc/status", (req, res) => {
//     // Replace with actual user KYC logic
//     const isKycComplete = true; // Simulate KYC status
//     res.json({ kycComplete: isKycComplete });
// });


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });



require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const validator = require("validator");
const cors = require("cors"); 

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes


// Middleware
app.use(bodyParser.json());

// Temporary storage for OTPs (use a database in production)
const otps = {};

// Helper functions
const generateOtp = () => crypto.randomInt(1000, 9999).toString();
const addOtp = (email, otp) => {
  otps[email] = { otp, expiresAt: Date.now() + 5 * 60 * 1000 }; // 5 mins expiry
};
const isOtpValid = (email, otp) => {
  const entry = otps[email];
  if (!entry || entry.expiresAt < Date.now()) return false;
  return entry.otp === otp;
};

const transporter = nodemailer.createTransport({
  host: 'email.aionioncapital.com', // Update with your email server's SMTP host
  port: 465,  // Use 587 for TLS or 465 for SSL
  secure: true, // Set to true if you're using SSL, false for TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


// Routes
app.post("/send-otp", (req, res) => {
  const { email } = req.body;

  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Valid email is required." });
  }

  const otp = generateOtp();
  addOtp(email, otp);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Verification",
    text: `Your OTP is: ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send OTP. Please try again." });
    }

    console.log("Email sent:", info.response);
    res.status(200).json({ message: "OTP sent successfully." });
  });
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP are required." });
  }

  if (isOtpValid(email, otp)) {
    delete otps[email]; // Remove OTP after verification
    return res.status(200).json({ message: "OTP verified successfully." });
  }

  res.status(400).json({ message: "Incorrect OTP or OTP expired." });
});


// Endpoint: /api/login
app.post('/api/login', async (req, res) => {
  const { email } = req.body;

  // Validate if email exists
  const user = await User.findOne({ email }); // Replace with your DB query
  if (!user) {
      return res.status(404).json({ message: 'Email not found.' });
  }

  // Send OTP logic
  const otp = generateOtp(); // Replace with your OTP generation logic
  await sendOtpToEmail(email, otp); // Replace with your OTP sending logic

  res.status(200).json({ message: 'OTP sent to your email.' });
});


// Endpoint: /api/kyc-status
app.get('/api/kyc-status', async (req, res) => {
  const { userId } = req.query;

  // Fetch KYC status
  const user = await User.findById(userId); // Replace with your DB query
  if (!user) {
      return res.status(404).json({ message: 'User not found.' });
  }

  res.status(200).json({ kycComplete: user.kycComplete, name: user.name });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

