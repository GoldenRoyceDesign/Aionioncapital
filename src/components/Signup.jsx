import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/Logo_Aionion.png';
import { Link } from 'react-router-dom';
import signupLogin from '../assets/signup-login.png';

const Signup = () => {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false); // OTP sent status
    const [error, setError] = useState(null); // Error state to display errors

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mobile && email) {
            try {
                // Make API request to send OTP
                const response = await fetch('http://localhost:5000/sendOtp', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ mobile, email }),
                });

                const result = await response.json();

                if (response.status === 200) {
                    setOtpSent(true); // Mark OTP as sent
                    alert('OTP sent to mobile and email!');
                    navigate('/VerifyPage', { state: { mobile, email } });
                } else {
                    setError(result.message || 'An error occurred. Please try again.');
                }
            } catch (err) {
                console.error('Error sending OTP:', err);
                setError('An error occurred while sending OTP.');
            }
        } else {
            alert('Please enter both mobile and email.');
        }
    };

    return (
        <div className='signup-page'>
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
                        <div className='signup-left mt-5'>
                            <div className='mb-5 text-center'>
                                <h2>Get started now</h2>
                                <h2 style={{ color: '#3B3AF8' }}>Sign Up</h2>
                            </div>

                            {error && <div className="error-message">{error}</div>} {/* Display error if exists */}

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Mobile:</label>
                                    <input
                                        type="tel"
                                        value={mobile}
                                        onChange={(e) => setMobile(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="submit" className='mt-5' disabled={otpSent}>
                                    {otpSent ? 'OTP Sent' : 'Sign Up'}
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-6 signup-right p-5 text-white'>
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

export default Signup;


