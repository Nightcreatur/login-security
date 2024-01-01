import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import './Signup.css';
import { createUserWithEmailAndPassword, sendEmailVerification, getAuth } from 'firebase/auth';



const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!email || !password || !confirmPassword) {
            setError('Please fill in all fields');
            return false;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        }

        if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            setError(
                'Password must be at least 8 characters long and contain at least one special character.'
            );
            return false;
        }

        setError('');
        return true;
    };

    const handleSignup = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {

                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        console.log('Verification email sent');
                    })
                    .catch((verificationError) => {
                        console.error('Error sending verification email', verificationError);
                    });

                alert('Signup successful! Check your email for verification.');

            })
            .catch((e) => {
                console.log(e);
                setError('Error creating account. Please try again.');

                alert(e.code);
            });
    };


    return (
        <div className="glass-container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <span
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >

                        {showPassword ? (
                            <FontAwesomeIcon icon={faEyeSlash} />
                        ) : (
                            <FontAwesomeIcon icon={faEye} />
                        )}
                    </span>
                </div>
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: 'auto',
                        alignItems: 'center',
                    }}
                >
                    Sign Up
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Link to="/">
                    <button>Already have an account? Login</button>
                </Link>
            </form>
        </div>
    );
};

export default SignupPage;
