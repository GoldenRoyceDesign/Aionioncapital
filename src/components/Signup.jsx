// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import logo from '../assets/Logo_Aionion.png';
// import { Link } from 'react-router-dom';
// import signupLogin from '../assets/signup-login.png';

// const Signup = () => {
//     const navigate = useNavigate();
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [otpSent, setOtpSent] = useState(false); // OTP sent status
//     const [error, setError] = useState(null); // Error state to display errors

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (mobile && email) {
//             try {
//                 // Make API request to send OTP
//                 const response = await fetch('https://aionion-capital.onrender.com/sendOtp', {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                     },
//                     body: JSON.stringify({ mobile, email }),
//                 });

//                 const result = await response.json();

//                 if (response.status === 200) {
//                     setOtpSent(true); // Mark OTP as sent
//                     alert('OTP sent to mobile and email!');
//                     navigate('/VerifyPage', { state: { mobile, email } });
//                 } else {
//                     setError(result.message || 'An error occurred. Please try again.');
//                 }
//             } catch (err) {
//                 console.error('Error sending OTP:', err);
//                 setError('An error occurred while sending OTP.');
//             }
//         } else {
//             alert('Please enter both mobile and email.');
//         }
//     };

//     return (
//         <div className='signup-page'>
//             <div className='w-100' style={{ overflow: 'hidden' }}>
//                 <div className='row'>
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
//                         <div className='signup-left mt-5'>
//                             <div className='mb-5 text-center'>
//                                 <h2>Get started now</h2>
//                                 <h2 style={{ color: '#3B3AF8' }}>Sign Up</h2>
//                             </div>

//                             {error && <div className="error-message">{error}</div>} {/* Display error if exists */}

//                             <form onSubmit={handleSubmit}>
//                                 <div>
//                                     <label>Mobile:</label>
//                                     <input
//                                         type="tel"
//                                         value={mobile}
//                                         onChange={(e) => setMobile(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label>Email:</label>
//                                     <input
//                                         type="email"
//                                         value={email}
//                                         onChange={(e) => setEmail(e.target.value)}
//                                         required
//                                     />
//                                 </div>
//                                 <button type="submit" className='mt-5' disabled={otpSent}>
//                                     {otpSent ? 'OTP Sent' : 'Sign Up'}
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                     <div className='col-md-6 signup-right p-5 text-white'>
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

// export default Signup;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import logo from '../assets/Logo_Aionion.png';
// import { Link } from 'react-router-dom';
// import signupLogin from '../assets/signup-login.png';

// const Signup = () => {

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate(); // React Router's navigate function for redirect

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         // Ensure password and confirm password match
//         if (password !== confirmPassword) {
//             setError('Passwords do not match');
//             return;
//         }

//         const userData = { email, password, confirmPassword };

//         try {
//             const response = await fetch('http://localhost:5000/signup', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify(userData),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 // If signup is successful, redirect to the dashboard
//                 navigate('/Dashboard');
//             } else {
//                 // Handle error, display message
//                 setError(data.message || 'Signup failed');
//             }
//         } catch (error) {
//             setError('Error occurred while signing up');
//             console.error(error);
//         }
//     };


//     return (
//         <>
//             <div className='signup-page'>
//                 <div className='w-100' style={{ overflow: 'hidden' }}>
//                     <div className='row'>
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
//                                     <h2 style={{ color: '#3B3AF8' }}>Sign Up</h2>
//                                 </div>

//                                 {error && <p>{error}</p>}
//                                 <form onSubmit={handleSignup}>
//                                     <div>
//                                         <label>Email:</label>
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             value={email}
//                                             onChange={(e) => setEmail(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label>Password:</label>
//                                         <input
//                                             type="password"
//                                             placeholder="Password"
//                                             value={password}
//                                             onChange={(e) => setPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <div>
//                                         <label>Confirm Password:</label>
//                                         <input
//                                             type="password"
//                                             placeholder="Confirm Password"
//                                             value={confirmPassword}
//                                             onChange={(e) => setConfirmPassword(e.target.value)}
//                                             required
//                                         />
//                                     </div>
//                                     <button type="submit" className='mt-5'>Signup</button>
//                                 </form>

//                                 <div className="mt-3 text-center">
//                                     <p>
//                                         Already have an account? <Link to="/LoginPage" style={{ color: '#3B3AF8' }}>Login</Link>
//                                     </p>
//                                 </div>

//                             </div>
//                         </div>
//                         <div className='col-md-6 signup-right p-5 text-white'>
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

//         </>
//     );
// };
// export default Signup;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../assets/Logo_Aionion.png';
import { Link } from 'react-router-dom';
import signupLogin from '../assets/signup-login.png';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSendOtp = async () => {
        if (!email) {
            setError("Please enter a valid email.");
            return;
        }
    
        setLoading(true);
        setError(null);
    
        try {
            const response = await fetch("http://localhost:5000/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
    
            if (!response.ok) {
                const data = await response.json();
                setError(data.message || "Failed to send OTP. Please try again.");
                console.error("Error response:", data); // Log server error response
            } else {
                const data = await response.json();
                console.log("Success:", data);
                navigate("/VerifyPage", { state: { email } });
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
            console.error("Request failed:", err); // Log frontend error
        } finally {
            setLoading(false);
        }
    };
    


    return (
        <>
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

                                <form>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {error && <p className="error">{error}</p>}
                                        <button onClick={handleSendOtp} disabled={loading} className='mt-5'>
                                            {loading ? "Sending..." : "Send OTP"}
                                        </button>
                                    </div>
                                </form>
                                

                                <div className="mt-3 text-center">
                                    <p>
                                        Already have an account? <Link to="/LoginPage" style={{ color: '#3B3AF8' }}>Login</Link>
                                    </p>
                                </div>

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

        </>
    );
};
export default Signup;
