import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './verifypage.css';

const VerifyPage = ({ mobile, email }) => {
    const [mobileOtp, setMobileOtp] = useState(Array(4).fill(''));
    const [emailOtp, setEmailOtp] = useState(Array(4).fill(''));
    const [mobileVerified, setMobileVerified] = useState(false);
    const [emailVerified, setEmailVerified] = useState(false);
    const [mobileCountdown, setMobileCountdown] = useState(180);
    const [emailCountdown, setEmailCountdown] = useState(180);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const [redirectToDashboard, setRedirectToDashboard] = useState(false);

    const navigate = useNavigate(); // Declare navigate to use for redirection

    // Handle OTP input
    const handleOtpChange = (e, index, type) => {
        const value = e.target.value.replace(/\D/g, ''); // Allow digits only
        if (type === 'mobile') {
            const newOtp = [...mobileOtp];
            newOtp[index] = value;
            setMobileOtp(newOtp);
            if (index === 3 && newOtp.every((digit) => digit !== '')) {
                verifyOtp('mobile');  // Verify when all digits are entered
            }
        } else {
            const newOtp = [...emailOtp];
            newOtp[index] = value;
            setEmailOtp(newOtp);
            if (index === 3 && newOtp.every((digit) => digit !== '')) {
                verifyOtp('email');  // Verify when all digits are entered
            }
        }
    };

    // Countdown timers
    useEffect(() => {
        if (mobileCountdown > 0) {
            const timer = setInterval(() => setMobileCountdown((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [mobileCountdown]);

    useEffect(() => {
        if (emailCountdown > 0) {
            const timer = setInterval(() => setEmailCountdown((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [emailCountdown]);

    const verifyOtp = async (type) => {
        setLoading(true);
        setError('');
    
        const otp = type === 'mobile' ? mobileOtp.join('') : emailOtp.join('');
    
        if (!otp) {
            setError('OTP is required.');
            setLoading(false);
            return;
        }
    
        // Prepare request data based on type (mobile or email)
        let requestData = {};
        if (type === 'mobile') {
            requestData = { mobile, otp };
        } else if (type === 'email') {
            requestData = { email, otp };
        }
    
        // Ensure that either mobile or email is provided
        if (!requestData[type]) {
            setError(`${type.charAt(0).toUpperCase() + type.slice(1)} is required.`);
            setLoading(false);
            return;
        }
    
        try {
            const response = await axios.post('http://localhost:5000/verifyOtp', requestData);
            console.log(response.data);
    
            // If verification is successful, mark the type as verified
            if (response.data === `${type.charAt(0).toUpperCase() + type.slice(1)} OTP verified successfully!`) {
                if (type === 'mobile') setMobileVerified(true);
                else setEmailVerified(true);
            } else {
                setError('Invalid OTP or OTP expired');
            }
        } catch (error) {
            console.error('Error during OTP verification:', error);
            if (error.response) {
                setError(`Error: ${error.response.data}`);
            } else {
                setError('An error occurred during OTP verification');
            }
        } finally {
            setLoading(false);
        }
    };
    
    
    
    
    
    // Resend OTP
    const resendOtp = async (type) => {
        setError('');
        try {
            const response = await axios.post('https://aionion-capital.onrender.com/sendOtp', { mobile, email });
            if (response.data === 'OTP sent successfully!') {
                type === 'mobile' ? setMobileCountdown(180) : setEmailCountdown(180);
                alert('OTP resent successfully!');
            } else {
                setError('Failed to resend OTP.');
            }
        } catch (err) {
            setError('An error occurred while resending OTP');
        }
    };

    // Handle redirect to dashboard
    const handleDashboardRedirect = () => {
        if (mobileVerified && emailVerified) {
            navigate('/dashboard'); // Use navigate to redirect to the dashboard
        } else {
            setError('Please verify both OTPs to proceed.');
        }
    };

    return (
        <div className="verify-page">
            <h2>Verify Your Mobile and Email</h2>

            {/* Mobile OTP Section */}
            <div className="otp-section">
                <h3>Enter Mobile OTP</h3>
                <div className="otp-input-container">
                    {mobileOtp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index, 'mobile')}
                            disabled={mobileVerified || loading}
                            aria-label={`Mobile OTP digit ${index + 1}`}
                        />
                    ))}
                </div>
                {mobileVerified ? (
                    <p className="verified-text">✔️ Mobile number verified</p>
                ) : (
                    <p className="otp-timer">
                        Resend in ({mobileCountdown}s){' '}
                        {mobileCountdown === 0 && (
                            <span
                                className="resend-link"
                                onClick={() => resendOtp('mobile')}
                                disabled={loading}
                            >
                                Resend OTP
                            </span>
                        )}
                    </p>
                )}
            </div>

            {/* Email OTP Section */}
            <div className="otp-section">
                <h3>Enter Email OTP</h3>
                <div className="otp-input-container">
                    {emailOtp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleOtpChange(e, index, 'email')}
                            disabled={emailVerified || loading}
                            aria-label={`Email OTP digit ${index + 1}`}
                        />
                    ))}
                </div>
                {emailVerified ? (
                    <p className="verified-text">✔️ Email verified</p>
                ) : (
                    <p className="otp-timer">
                        Resend in ({emailCountdown}s){' '}
                        {emailCountdown === 0 && (
                            <span
                                className="resend-link"
                                onClick={() => resendOtp('email')}
                                disabled={loading}
                            >
                                Resend OTP
                            </span>
                        )}
                    </p>
                )}
            </div>

            {/* Error/Success Messages */}
            {error && <p className="error-text">{error}</p>}

            {/* Go to Dashboard button */}
            <button
                onClick={handleDashboardRedirect}
                disabled={!mobileVerified || !emailVerified || loading}
            >
                Go to Dashboard
            </button>
        </div>
    );
};

export default VerifyPage;


