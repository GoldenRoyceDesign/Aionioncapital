// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
// import './verifypage.css';

// const VerifyPage = ({ mobile, email }) => {
//     const [mobileOtp, setMobileOtp] = useState(Array(4).fill(''));
//     const [emailOtp, setEmailOtp] = useState(Array(4).fill(''));
//     const [mobileVerified, setMobileVerified] = useState(false);
//     const [emailVerified, setEmailVerified] = useState(false);
//     const [mobileCountdown, setMobileCountdown] = useState(180);
//     const [emailCountdown, setEmailCountdown] = useState(180);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');
//     // const [redirectToDashboard, setRedirectToDashboard] = useState(false);

//     const navigate = useNavigate(); // Declare navigate to use for redirection

//     // Handle OTP input
//     const handleOtpChange = (e, index, type) => {
//         const value = e.target.value.replace(/\D/g, ''); // Allow digits only
//         if (type === 'mobile') {
//             const newOtp = [...mobileOtp];
//             newOtp[index] = value;
//             setMobileOtp(newOtp);
//             if (index === 3 && newOtp.every((digit) => digit !== '')) {
//                 verifyOtp('mobile');  // Verify when all digits are entered
//             }
//         } else {
//             const newOtp = [...emailOtp];
//             newOtp[index] = value;
//             setEmailOtp(newOtp);
//             if (index === 3 && newOtp.every((digit) => digit !== '')) {
//                 verifyOtp('email');  // Verify when all digits are entered
//             }
//         }
//     };

//     // Countdown timers
//     useEffect(() => {
//         if (mobileCountdown > 0) {
//             const timer = setInterval(() => setMobileCountdown((prev) => prev - 1), 1000);
//             return () => clearInterval(timer);
//         }
//     }, [mobileCountdown]);

//     useEffect(() => {
//         if (emailCountdown > 0) {
//             const timer = setInterval(() => setEmailCountdown((prev) => prev - 1), 1000);
//             return () => clearInterval(timer);
//         }
//     }, [emailCountdown]);

//     const verifyOtp = async (type) => {
//         setLoading(true);
//         setError('');

//         const otp = type === 'mobile' ? mobileOtp.join('') : emailOtp.join('');

//         if (!otp) {
//             setError('OTP is required.');
//             setLoading(false);
//             return;
//         }

//         // Prepare request data based on type (mobile or email)
//         let requestData = {};
//         if (type === 'mobile') {
//             requestData = { mobile, otp };
//         } else if (type === 'email') {
//             requestData = { email, otp };
//         }

//         // Ensure that either mobile or email is provided
//         if (!requestData[type]) {
//             setError(`${type.charAt(0).toUpperCase() + type.slice(1)} is required.`);
//             setLoading(false);
//             return;
//         }

//         try {
//             const response = await axios.post('https://aionion-capital.onrender.com/verifyOtp', requestData);
//             console.log(response.data);

//             // If verification is successful, mark the type as verified
//             if (response.data === `${type.charAt(0).toUpperCase() + type.slice(1)} OTP verified successfully!`) {
//                 if (type === 'mobile') setMobileVerified(true);
//                 else setEmailVerified(true);
//             } else {
//                 setError('Invalid OTP or OTP expired');
//             }
//         } catch (error) {
//             console.error('Error during OTP verification:', error);
//             if (error.response) {
//                 setError(`Error: ${error.response.data}`);
//             } else {
//                 setError('An error occurred during OTP verification');
//             }
//         } finally {
//             setLoading(false);
//         }
//     };





//     // Resend OTP
//     const resendOtp = async (type) => {
//         setError('');
//         try {
//             const response = await axios.post('https://aionion-capital.onrender.com/sendOtp', { mobile, email });
//             if (response.data === 'OTP sent successfully!') {
//                 type === 'mobile' ? setMobileCountdown(180) : setEmailCountdown(180);
//                 alert('OTP resent successfully!');
//             } else {
//                 setError('Failed to resend OTP.');
//             }
//         } catch (err) {
//             setError('An error occurred while resending OTP');
//         }
//     };

//     // Handle redirect to dashboard
//     const handleDashboardRedirect = () => {
//         if (mobileVerified && emailVerified) {
//             navigate('/dashboard'); // Use navigate to redirect to the dashboard
//         } else {
//             setError('Please verify both OTPs to proceed.');
//         }
//     };

//     return (
//         <div className="verify-page">
//             <h2>Verify Your Mobile and Email</h2>

//             {/* Mobile OTP Section */}
//             <div className="otp-section">
//                 <h3>Enter Mobile OTP</h3>
//                 <div className="otp-input-container">
//                     {mobileOtp.map((digit, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             maxLength="1"
//                             value={digit}
//                             onChange={(e) => handleOtpChange(e, index, 'mobile')}
//                             disabled={mobileVerified || loading}
//                             aria-label={`Mobile OTP digit ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//                 {mobileVerified ? (
//                     <p className="verified-text">✔️ Mobile number verified</p>
//                 ) : (
//                     <p className="otp-timer">
//                         Resend in ({mobileCountdown}s){' '}
//                         {mobileCountdown === 0 && (
//                             <span
//                                 className="resend-link"
//                                 onClick={() => resendOtp('mobile')}
//                                 disabled={loading}
//                             >
//                                 Resend OTP
//                             </span>
//                         )}
//                     </p>
//                 )}
//             </div>

//             {/* Email OTP Section */}
//             <div className="otp-section">
//                 <h3>Enter Email OTP</h3>
//                 <div className="otp-input-container">
//                     {emailOtp.map((digit, index) => (
//                         <input
//                             key={index}
//                             type="text"
//                             maxLength="1"
//                             value={digit}
//                             onChange={(e) => handleOtpChange(e, index, 'email')}
//                             disabled={emailVerified || loading}
//                             aria-label={`Email OTP digit ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//                 {emailVerified ? (
//                     <p className="verified-text">✔️ Email verified</p>
//                 ) : (
//                     <p className="otp-timer">
//                         Resend in ({emailCountdown}s){' '}
//                         {emailCountdown === 0 && (
//                             <span
//                                 className="resend-link"
//                                 onClick={() => resendOtp('email')}
//                                 disabled={loading}
//                             >
//                                 Resend OTP
//                             </span>
//                         )}
//                     </p>
//                 )}
//             </div>

//             {/* Error/Success Messages */}
//             {error && <p className="error-text">{error}</p>}

//             {/* Go to Dashboard button */}
//             <button
//                 onClick={handleDashboardRedirect}
//                 disabled={!mobileVerified || !emailVerified || loading}
//             >
//                 Go to Dashboard
//             </button>
//         </div>
//     );
// };

// export default VerifyPage;




// import { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const VerifyPage = () => {
//     const location = useLocation(); // To retrieve the state passed from the signup page
//     const { email, phone } = location.state || {}; // Destructure the data
//     const navigate = useNavigate();


//     // States for OTP input fields
//     const [emailOtp, setEmailOtp] = useState('');
//     const [phoneOtp, setPhoneOtp] = useState('');

//     const [errorMessage, setErrorMessage] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Handle OTP Verification
//     const handleVerifyOtp = async (e) => {
//         e.preventDefault();

//         if (!email || !phone || !emailOtp || !phoneOtp) {
//             setErrorMessage('Please enter both OTPs');
//             return;
//         }

//         setLoading(true);

//         try {
//             // Example of sending OTPs for verification to your backend
//             const response = await fetch('http://localhost:5000/verify-otp', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     email,
//                     phone,
//                     emailOtp,
//                     phoneOtp,
//                 }),
//             });

//             const result = await response.json();
//             if (result.success) {
//                 alert('OTP verified successfully!');
//                 // Redirect to the next page or complete the user registration process
//                 navigate('/Dashboard'); 
//             } else {
//                 setErrorMessage('Invalid OTPs. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error verifying OTPs:', error);
//             setErrorMessage('An error occurred. Please try again later.');
//         }

//         setLoading(false);
//     };

//     return (
//         <div>
//             <h2>Verify OTPs</h2>
//             <form onSubmit={handleVerifyOtp}>
//                 <div>
//                     <label>Email OTP</label>
//                     <input 
//                         type="text" 
//                         value={emailOtp} 
//                         onChange={(e) => setEmailOtp(e.target.value)} 
//                         placeholder="Enter email OTP"
//                     />
//                 </div>
//                 <div>
//                     <label>Phone OTP</label>
//                     <input 
//                         type="text" 
//                         value={phoneOtp} 
//                         onChange={(e) => setPhoneOtp(e.target.value)} 
//                         placeholder="Enter phone OTP"
//                     />
//                 </div>

//                 {errorMessage && <p>{errorMessage}</p>}

//                 <button type="submit" disabled={loading}>
//                     {loading ? 'Verifying...' : 'Verify OTPs'}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default VerifyPage;



import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/verifypage.css'
import logo from '../assets/Logo_Aionion.png';
import signupLogin from '../assets/signup-login.png';

const VerifyPage = () => {
    const location = useLocation();
    const { email, phone } = location.state || {};
    // const navigate = useNavigate();

    const [emailOtp, setEmailOtp] = useState(Array(4).fill(''));
    const [phoneOtp, setPhoneOtp] = useState(Array(4).fill(''));
    const [emailStatus, setEmailStatus] = useState('');
    const [phoneStatus, setPhoneStatus] = useState('');
    const [emailResendTimer, setEmailResendTimer] = useState(180);
    const [phoneResendTimer, setPhoneResendTimer] = useState(180);

    useEffect(() => {
        const emailTimer = setInterval(() => {
            if (emailResendTimer > 0) setEmailResendTimer((prev) => prev - 1);
        }, 1000);
        const phoneTimer = setInterval(() => {
            if (phoneResendTimer > 0) setPhoneResendTimer((prev) => prev - 1);
        }, 1000);

        return () => {
            clearInterval(emailTimer);
            clearInterval(phoneTimer);
        };
    }, [emailResendTimer, phoneResendTimer]);

    const handleOtpChange = (otpType, value, index) => {
        const otp = otpType === 'email' ? [...emailOtp] : [...phoneOtp];
        otp[index] = value.slice(-1); // Take only the last character (to ensure single digit)

        if (otpType === 'email') setEmailOtp(otp);
        else setPhoneOtp(otp);

        // Move to the next box if a digit is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`${otpType}-otp-${index + 1}`).focus();
        }
    };

    const validateOtp = async (otpType) => {
        const otpValue = otpType === 'email' ? emailOtp.join('') : phoneOtp.join('');
        if (!otpValue || otpValue.length !== 4) return;


        const body = otpType === 'email'
            ? { email, emailOtp: otpValue, phoneOtp: '' }
            : { phone, emailOtp: '', phoneOtp: otpValue };

        try {
            const response = await fetch('http://localhost:5000/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const result = await response.json();
            if (result.success) {
                if (otpType === 'email') {
                    setEmailStatus('verified');
                } else {
                    setPhoneStatus('verified');
                }
            } else {
                if (otpType === 'email') {
                    setEmailStatus('Invalid email OTP. Please try again.');
                } else {
                    setPhoneStatus('Invalid phone OTP. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
        }

    };

    const resendOtp = (otpType) => {
        if (otpType === 'email') {
            setEmailResendTimer(180);
            alert('Email OTP has been resent!');
        } else {
            setPhoneResendTimer(180);
            alert('Phone OTP has been resent!');
        }
    };

    return (
        <div className="verify-page">
            <div className='w-100' style={{ overflow: 'hidden' }}>
                <div className='row d-flex'>
                    <div className='col-md-6 mb-5'>
                        <Link to='/'>
                            <img
                                src={logo}
                                width="150"
                                height="40"
                                className="d-inline-block align-top mt-4 ms-4"
                                alt="Logo"
                            />
                        </Link>

                        <form>
                            <div className="otp-section mt-5">
                                <label>Enter Mobile OTP</label>
                                <div className="otp-boxes">
                                    {phoneOtp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`phone-otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange('phone', e.target.value, index)}
                                            onBlur={() => validateOtp('phone')}
                                        />
                                    ))}
                                </div>
                                {phoneStatus === 'verified' ? (
                                    <p>Your mobile number has been verified ✅</p>
                                ) : (
                                    <p className='mt-5 text-center'>
                                        The entered mobile is +91 {phone}.{' '}To change
                                        <Link to='/Signup' className='ms-2'>
                                            Click here
                                        </Link>
                                        <br />
                                        Resend in ({phoneResendTimer}s)
                                        {phoneResendTimer === 0 && (
                                            <button type="button" onClick={() => resendOtp('phone')}>
                                                Resend Now
                                            </button>
                                        )}
                                    </p>
                                )}
                            </div>

                            <div className="otp-section">
                                <label>Enter Email OTP</label>
                                <div className="otp-boxes">
                                    {emailOtp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`email-otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange('email', e.target.value, index)}
                                            onBlur={() => validateOtp('email')}
                                        />
                                    ))}
                                </div>
                                {emailStatus === 'verified' ? (
                                    <p>Your email has been verified ✅</p>
                                ) : (
                                    <p className='mt-5 text-center'>
                                        The entered email is {email}.{' '}To change
                                        <Link to='/Signup' className='ms-2'>
                                            Click here
                                        </Link>
                                        <br />
                                        Resend in ({emailResendTimer}s)
                                        {emailResendTimer === 0 && (
                                            <button type="button" onClick={() => resendOtp('email')}>
                                                Resend Now
                                            </button>
                                        )}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className='col-md-6 verify-page-right p-5 text-white'>
                        <h2 className='mt-4'>Effortless Access to Your Investments</h2>
                        <p className='mt-4'>
                            Sign Up to unlock your personalised dashboard and take charge of your equity,
                            bonds, mutual funds, and portfolio with Aionion Capital.
                        </p>
                        <img src={signupLogin} alt='signupLogin' className='img-fluid mt-5' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyPage;

