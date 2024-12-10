// VerifyPage Component (Email OTP only)
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import logo from '../assets/Logo_Aionion.png';
import signupLogin from '../assets/signup-login.png';

const VerifyPage = () => {
    const location = useLocation();
    const { email } = location.state || {};

    const [otp, setOtp] = useState(Array(4).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isVerified, setIsVerified] = useState(false);
    const [emailResendTimer, setEmailResendTimer] = useState(30);

    useEffect(() => {
        const timer = setInterval(() => {
            setEmailResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (otp.every((digit) => digit !== "")) {
            validateOtp();
        }
    }, [otp]);

    const handleOtpChange = (value, index) => {
        if (!/^[0-9]?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Automatically focus next input
        if (value && index < 3) {
            const nextInput = document.getElementById(`otp-${index + 1}`);
            nextInput?.focus();
        }
    };

    const validateOtp = async () => {
        if (otp.some((digit) => digit === "")) {
            setError("Please enter the full OTP.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:5000/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, otp: otp.join("") }),
            });

            const data = await response.json();

            if (response.ok) {
                setIsVerified(true);
            } else {
                setError(data.message || "Invalid OTP. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const resendOtp = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("http://localhost:5000/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setEmailResendTimer(30);
            } else {
                setError(data.message || "Failed to resend OTP. Please try again.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="verify-page">
            <div className='w-100' style={{ overflow: 'hidden' }}>
                <div className='row'>
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

                        <div className='otp-section mt-5'>
                            <h2 className="mt-5">Enter Email OTP</h2>
                            <div className="otp-boxes mt-3">
                                {otp.map((digit, index) => (
                                    <input
                                        key={index}
                                        id={`otp-${index}`}
                                        type="text"
                                        maxLength="1"
                                        value={digit}
                                        onChange={(e) => handleOtpChange(e.target.value, index)}
                                        disabled={isVerified}
                                    />
                                ))}
                            </div>
                            {error && <p className="error">{error}</p>}
                            {isVerified ? (
                                <p className="mt-5">Your email has been verified ✅</p>
                            ) : (
                                <>
                                    {/* <button onClick={validateOtp} disabled={loading || isVerified}>
                                        {loading ? "Verifying..." : "Verify OTP"}
                                    </button> */}
                                    <p className="mt-5 text-center">
                                        The entered email is {email}. To change
                                        <Link to="/Signup" className="ms-2">
                                            Click here
                                        </Link>
                                        <br />
                                        Resend in ({emailResendTimer}s)
                                        {emailResendTimer === 0 && (
                                            <button type="button" onClick={resendOtp} disabled={loading}>
                                                Resend Now
                                            </button>
                                        )}
                                    </p>
                                </>
                            )}
                        </div>
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