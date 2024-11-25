import React, { useState } from 'react'
import logo from '../assets/Logo_Aionion.png'
import { Link } from 'react-router-dom';
import signupLogin from '../assets/signup-login.png'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <div className='login-page'>
                <div className='w-100' style={{ overflow: 'hidden' }}>
                    <div className='row'>
                        <div className='col-md-6 mb-5'>
                            <Link to='/' >
                                <img src={logo}
                                    width="150"
                                    height="40"
                                    className="d-inline-block align-top mt-4 ms-4"
                                    alt="Logo" /></Link>

                            <div className='login-left mt-5'>
                                <div className='mb-5 text-center'>
                                    <h2>Get started now</h2>
                                    <h2 style={{ color: '#3B3AF8' }}>Log in</h2>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className='mt-5'>Login</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6 login-right p-5 text-white'>
                            <h2 className='mt-4'>Effortless Access to Your Investments</h2>
                            <p className='mt-4'>Sign Up to unlock your personalised dashboard and take charge of your equity, bonds, mutual funds, and portfolio with Aionion Capital.</p>

                            <img src={signupLogin} alt='signupLogin' className='img-fluid mt-5' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login