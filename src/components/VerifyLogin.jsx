import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/verifypage.css';
import logo from '../assets/Logo_Aionion.png';
import loginImage from '../assets/signup-login.png';

const VerifyLogin = () => {
    const location = useLocation();
    const { email, phone } = location.state || {};
    const isEmailVerification = email !== undefined; // Assumes email and phone can't exist together



    const [otp, setOtp] = useState(Array(4).fill(''));
    const [status, setStatus] = useState('');
    const [resendTimer, setResendTimer] = useState(180);

    useEffect(() => {
        const timer = setInterval(() => {
            if (resendTimer > 0) setResendTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [resendTimer]);

    const handleOtpChange = (value, index) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value.slice(-1); // Ensure single digit
        setOtp(updatedOtp);

        // Automatically move to the next input
        if (value && index < updatedOtp.length - 1) {
            document.getElementById(`otp-${index + 1}`).focus();
        }

        // Trigger validation automatically when all digits are entered
        if (updatedOtp.join('').length === 4) {
            validateOtp(updatedOtp.join(''));
        }
    };

    const validateOtp = async (otpValue) => {
        const body = isEmailVerification
            ? { email, otp: otpValue }
            : { phone, otp: otpValue };

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
                setStatus('verified');
            } else {
                setStatus('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            setStatus('An error occurred. Please try again.');
        }
    };

    const resendOtp = () => {
        setResendTimer(180);
        alert(`${isEmailVerification ? 'Email' : 'Phone'} OTP has been resent!`);
    };

    return (
        <div className="verify-page">
            <div className="w-100" style={{ overflow: 'hidden' }}>
                <div className="row d-flex">
                    <div className="col-md-6 mb-5">
                        <Link to="/">
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
                                <label>Enter {isEmailVerification ? 'Email' : 'Mobile'} OTP</label>
                                <div className="otp-boxes">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            id={`otp-${index}`}
                                            type="text"
                                            maxLength="1"
                                            value={digit}
                                            onChange={(e) => handleOtpChange(e.target.value, index)}
                                        />
                                    ))}
                                </div>
                                {status === 'verified' ? (
                                    <p>
                                        Your {isEmailVerification ? 'email' : 'mobile number'} has been verified ✅
                                    </p>
                                ) : (
                                    <p className="mt-5 text-center">
                                        The entered {isEmailVerification ? `email: ${email}` : `mobile: +91 ${phone}`} is{' '}
                                        To change
                                        <Link to="/Signup" className="ms-2">
                                            Click here
                                        </Link>

                                        <br />
                                        Resend in ({resendTimer}s)
                                        {resendTimer === 0 && (
                                            <button type="button" onClick={resendOtp}>
                                                Resend Now
                                            </button>
                                        )}
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="col-md-6 verify-page-right p-5 text-white">
                        <h2 className="mt-4">Effortless Access to Your Investments</h2>
                        <p className="mt-4">
                            Sign in to unlock your personalized dashboard and take charge of your
                            equity, bonds, mutual funds, and portfolio with Aionion Capital.
                        </p>
                        <img src={loginImage} alt="loginImage" className="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerifyLogin;
