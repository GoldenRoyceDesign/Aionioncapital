// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/Logo_Aionion.png';
// import signupLogin from '../assets/signup-login.png';

// const Login = () => {
//     const [input, setInput] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(''); // For inline validation errors
//     const navigate = useNavigate();

//     const handleInputChange = (e) => {
//         setInput(e.target.value);
//         setError(''); // Clear errors when the user starts typing
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         // Determine if input is email or phone based on validation
//         const isEmail = /\S+@\S+\.\S+/.test(input);
//         const isPhone = /^\d{10}$/.test(input); // Simple phone validation (10 digits)

//         if (!isEmail && !isPhone) {
//             setError('Please enter a valid email or 10-digit phone number.');
//             setLoading(false);
//             return;
//         }

//         const payload = isEmail ? { email: input } : { phone: input };

//         try {
//             console.log('Payload:', payload); // Debug: log payload
//             const response = await fetch('http://localhost:5000/send-otp-login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(payload),
//             });

//             const result = await response.json();
//             console.log('Response:', result); // Debug: log API response

//             if (result.success) {
//                 alert(`OTP sent to ${input}`);
//                 navigate('/VerifyLogin', { state: { input, isEmail } }); // Pass input and type
//             } else {
//                 alert('Failed to send OTP. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error sending OTP:', error);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="login-page">
//             <div className="w-100" style={{ overflow: 'hidden' }}>
//                 <div className="row">
//                     <div className="col-md-6 mb-5">
//                         <Link to="/">
//                             <img
//                                 src={logo}
//                                 width="150"
//                                 height="40"
//                                 className="d-inline-block align-top mt-4 ms-4"
//                                 alt="Logo"
//                             />
//                         </Link>
//                         <div className="login-left mt-5">
//                             <div className="mb-5 text-center">
//                                 <h2>Get started now</h2>
//                                 <h2 style={{ color: '#3B3AF8' }}>Log in</h2>
//                             </div>

//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label>Email or Mobile Number:</label>
//                                     <input
//                                         type="text"
//                                         value={input}
//                                         onChange={handleInputChange}
//                                         placeholder="Enter email or phone"
//                                         required
//                                         className="form-control"
//                                     />
//                                     {/* Display validation error */}
//                                     {error && <span style={{ color: 'red' }}>{error}</span>}
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="mt-5 btn btn-primary"
//                                     disabled={loading}
//                                 >
//                                     {loading ? (
//                                         <>
//                                             Sending OTP...{' '}
//                                             <span className="spinner-border spinner-border-sm"></span>
//                                         </>
//                                     ) : (
//                                         'Send OTP'
//                                     )}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className="col-md-6 login-right p-5 text-white">
//                         <h2 className="mt-4">Effortless Access to Your Investments</h2>
//                         <p className="mt-4">
//                             Sign Up to unlock your personalised dashboard and take charge of your
//                             equity, bonds, mutual funds, and portfolio with Aionion Capital.
//                         </p>
//                         <img src={signupLogin} alt="signupLogin" className="img-fluid mt-5" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;



// import React, { useState } from 'react';
// // import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/Logo_Aionion.png';
// import signupLogin from '../assets/signup-login.png';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate(); // For redirection after successful login

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         const userData = { email, password };

//         try {
//             const response = await fetch('http://localhost:5000/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(userData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 localStorage.setItem('token', data.token); // Save token in localStorage
//                 navigate('/Dashboard'); // Redirect to dashboard
//             } else {
//                 setError(data.message || 'Login failed');
//             }
//         } catch (error) {
//             console.error('Error logging in:', error);
//             setError('Error occurred while logging in');
//         }
//     };



//     return (
//         <div>
//             <div className="signup-page">
//                 <div className='w-100' style={{ overflow: 'hidden' }}>
//                     <div className='row d-flex'>
//                         <div className='col-md-6 mb-5'>
//                             <Link to='/'>
//                                 <img
//                                     src={logo}
//                                     width="150"
//                                     height="40"
//                                     className="d-inline-block align-top mt-4 ms-4"
//                                     alt="Logo"
//                                 />
//                             </Link>

//                             <div className='signup-left mt-5'>
//                                 <div className='mb-5 text-center'>
//                                     <h2>Get started now</h2>
//                                     <h2 style={{ color: '#3B3AF8' }}>Login</h2>
//                                 </div>

//                                 {error && <div className="error-message">{error}</div>}
//                                 <form onSubmit={handleLogin}>
//                                     <div>
//                                         <label>Enter Email</label>

//                                         <input
//                                             type="email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label>Enter Password</label>
//                                         <input
//                                             type="password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <button type="submit" className='mt-5'>Login</button>
//                                 </form>

//                                 <div className="signup-link">
//                                     <p>Don't have an account? <a href="/Signup">Signup</a></p>
//                                 </div>

//                             </div>
//                         </div>

//                         <div className='col-md-6 verify-page-right p-5 text-white'>
//                             <h2 className='mt-4'>Effortless Access to Your Investments</h2>
//                             <p className='mt-4'>
//                                 Sign Up to unlock your personalised dashboard and take charge of your equity,
//                                 bonds, mutual funds, and portfolio with Aionion Capital.
//                             </p>
//                             <img src={signupLogin} alt='signupLogin' className='img-fluid mt-5' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LoginPage;



import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/Logo_Aionion.png';
import signupLogin from '../assets/signup-login.png';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSendOtp = async () => {
        setMessage(""); // Clear previous messages

        // Validate email existence using account creation API
        try {
            const checkEmailResponse = await fetch("/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!checkEmailResponse.ok) {
                const data = await checkEmailResponse.json();
                setMessage(data.message || "Email not found.");
                return;
            }

            // Send OTP to email
            const sendOtpResponse = await fetch("/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },

                body: JSON.stringify({ email }),
            });

            const otpData = await sendOtpResponse.json();
            if (sendOtpResponse.ok) {
                navigate("/VerifyLogin", { state: { email } });
            } else {
                setMessage(otpData.message || "Failed to send OTP.");
            }
            
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred.");
        }
    };

    return (
        <div>
            <div className="signup-page">
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

                            <div className='signup-left mt-5'>
                                <div className='mb-5 text-center'>
                                    <h2>Get started now</h2>
                                    <h2 style={{ color: '#3B3AF8' }}>Login</h2>
                                </div>

                                {message && <p>{message}</p>}
                                <form>
                                    <div>
                                        <label>Enter Email</label>

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <button onClick={handleSendOtp} className="mt-5">Send OTP</button>
                                        
                                    </div>

                                </form>

                                <div className="signup-link">
                                    <p>Don't have an account? <a href="/Signup">Signup</a></p>
                                </div>

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

        </div>
    );
};

export default LoginPage;
