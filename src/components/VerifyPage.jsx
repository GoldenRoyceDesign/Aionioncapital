



// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import '../components/verifypage.css'
// import logo from '../assets/Logo_Aionion.png';
// import signupLogin from '../assets/signup-login.png';

// const VerifyPage = () => {
//     const location = useLocation();
//     const { email, phone } = location.state || {};
//     // const navigate = useNavigate();

//     const [emailOtp, setEmailOtp] = useState(Array(4).fill(''));
//     const [phoneOtp, setPhoneOtp] = useState(Array(4).fill(''));
//     const [emailStatus, setEmailStatus] = useState('');
//     const [phoneStatus, setPhoneStatus] = useState('');
//     const [emailResendTimer, setEmailResendTimer] = useState(180);
//     const [phoneResendTimer, setPhoneResendTimer] = useState(180);

//     useEffect(() => {
//         const emailTimer = setInterval(() => {
//             if (emailResendTimer > 0) setEmailResendTimer((prev) => prev - 1);
//         }, 1000);
//         const phoneTimer = setInterval(() => {
//             if (phoneResendTimer > 0) setPhoneResendTimer((prev) => prev - 1);
//         }, 1000);

//         return () => {
//             clearInterval(emailTimer);
//             clearInterval(phoneTimer);
//         };
//     }, [emailResendTimer, phoneResendTimer]);

//     const handleOtpChange = (otpType, value, index) => {
//         const otp = otpType === 'email' ? [...emailOtp] : [...phoneOtp];
//         otp[index] = value.slice(-1); // Take only the last character (to ensure single digit)

//         if (otpType === 'email') setEmailOtp(otp);
//         else setPhoneOtp(otp);

//         // Move to the next box if a digit is entered
//         if (value && index < otp.length - 1) {
//             document.getElementById(`${otpType}-otp-${index + 1}`).focus();
//         }
//     };

//     const validateOtp = async (otpType) => {
//         const otpValue = otpType === 'email' ? emailOtp.join('') : phoneOtp.join('');
//         if (!otpValue || otpValue.length !== 4) return;


//         const body = otpType === 'email'
//             ? { email, emailOtp: otpValue, phoneOtp: '' }
//             : { phone, emailOtp: '', phoneOtp: otpValue };

//         try {
//             const response = await fetch('http://localhost:5000/verify-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(body),
//             });

//             const result = await response.json();
//             if (result.success) {
//                 if (otpType === 'email') {
//                     setEmailStatus('verified');
//                 } else {
//                     setPhoneStatus('verified');
//                 }
//             } else {
//                 if (otpType === 'email') {
//                     setEmailStatus('Invalid email OTP. Please try again.');
//                 } else {
//                     setPhoneStatus('Invalid phone OTP. Please try again.');
//                 }
//             }
//         } catch (error) {
//             console.error('Error verifying OTP:', error);
//         }

//     };

//     const resendOtp = (otpType) => {
//         if (otpType === 'email') {
//             setEmailResendTimer(180);
//             alert('Email OTP has been resent!');
//         } else {
//             setPhoneResendTimer(180);
//             alert('Phone OTP has been resent!');
//         }
//     };

//     return (
//         <div className="verify-page">
//             <div className='w-100' style={{ overflow: 'hidden' }}>
//                 <div className='row d-flex'>
//                     <div className='col-md-6 mb-5'>
//                         <Link to='/'>
//                             <img
//                                 src={logo}
//                                 width="150"
//                                 height="40"
//                                 className="d-inline-block align-top mt-4 ms-4"
//                                 alt="Logo"
//                             />
//                         </Link>

//                         <form>
//                             <div className="otp-section mt-5">
//                                 <label>Enter Mobile OTP</label>
//                                 <div className="otp-boxes">
//                                     {phoneOtp.map((digit, index) => (
//                                         <input
//                                             key={index}
//                                             id={`phone-otp-${index}`}
//                                             type="text"
//                                             maxLength="1"
//                                             value={digit}
//                                             onChange={(e) => handleOtpChange('phone', e.target.value, index)}
//                                             onBlur={() => validateOtp('phone')}
//                                         />
//                                     ))}
//                                 </div>
//                                 {phoneStatus === 'verified' ? (
//                                     <p>Your mobile number has been verified ✅</p>
//                                 ) : (
//                                     <p className='mt-5 text-center'>
//                                         The entered mobile is +91 {phone}.{' '}To change
//                                         <Link to='/Signup' className='ms-2'>
//                                             Click here
//                                         </Link>
//                                         <br />
//                                         Resend in ({phoneResendTimer}s)
//                                         {phoneResendTimer === 0 && (
//                                             <button type="button" onClick={() => resendOtp('phone')}>
//                                                 Resend Now
//                                             </button>
//                                         )}
//                                     </p>
//                                 )}
//                             </div>

//                             <div className="otp-section">
//                                 <label>Enter Email OTP</label>
//                                 <div className="otp-boxes">
//                                     {emailOtp.map((digit, index) => (
//                                         <input
//                                             key={index}
//                                             id={`email-otp-${index}`}
//                                             type="text"
//                                             maxLength="1"
//                                             value={digit}
//                                             onChange={(e) => handleOtpChange('email', e.target.value, index)}
//                                             onBlur={() => validateOtp('email')}
//                                         />
//                                     ))}
//                                 </div>
//                                 {emailStatus === 'verified' ? (
//                                     <p>Your email has been verified ✅</p>
//                                 ) : (
//                                     <p className='mt-5 text-center'>
//                                         The entered email is {email}.{' '}To change
//                                         <Link to='/Signup' className='ms-2'>
//                                             Click here
//                                         </Link>
//                                         <br />
//                                         Resend in ({emailResendTimer}s)
//                                         {emailResendTimer === 0 && (
//                                             <button type="button" onClick={() => resendOtp('email')}>
//                                                 Resend Now
//                                             </button>
//                                         )}
//                                     </p>
//                                 )}
//                             </div>
//                         </form>
//                     </div>

//                     <div className='col-md-6 verify-page-right p-5 text-white'>
//                         <h2 className='mt-4'>Effortless Access to Your Investments</h2>
//                         <p className='mt-4'>
//                             Sign Up to unlock your personalised dashboard and take charge of your equity,
//                             bonds, mutual funds, and portfolio with Aionion Capital.
//                         </p>
//                         <img src={signupLogin} alt='signupLogin' className='img-fluid mt-5' />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default VerifyPage;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const [emailOtp, setEmailOtp] = useState('');
  const [phoneOtp, setPhoneOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://aionion-capital.onrender.com/verify-email-otp', {
        email: 'divyaneela75@gmail.com',
        otp: emailOtp,
      });
      await axios.post('https://aionion-capital.onrender.com/verify-phone-otp', {
        phone: '+918903558873',
        otp: phoneOtp,
      });
      navigate('/success');
    } catch (err) {
      setError('Invalid OTPs');
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <div>
        <label>Email OTP:</label>
        <input
          type="text"
          value={emailOtp}
          onChange={(e) => setEmailOtp(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Phone OTP:</label>
        <input
          type="text"
          value={phoneOtp}
          onChange={(e) => setPhoneOtp(e.target.value)}
          required
        />
      </div>
      <button type="submit">Verify</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default VerifyPage;


