"use client"; // Add this directive at the top

import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './login.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="login-container">
            <Header />
            <div className="login-form-container">
                
                <form onSubmit={handleLogin}>
                <h1 className='formtitle'>Loin To Your Account</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email/Username</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="view-password"
                                onClick={() => setShowPassword(!showPassword)}
                                title="Toggle password visibility"
                            >
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;