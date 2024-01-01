import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";

import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../src/firebaseconfig'


const LoginPage = () => {
    const [authUser, setAuthUser] = useState(null);
    const [verfied, setVerified] = useState(false);



    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential.user);

                alert('Login successful!');

            })
            .catch((error) => {
                console.log(error);

                alert('Login failed. Please check your credentials and try again.');
            });
    };


    return (
        <div className="glass-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} >
                <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={() => setVerified(true)}
                />,
                <button disabled={!verfied} style={{ display: 'flex', justifyContent: 'center', margin: 'auto', alignItems: 'center', }} >Login</button>
                <Link to="/signup"><button >Don't have an account? SignUp</button></Link>
            </form>
            <Link to='./forget'> <p className="forgot-password" >
                Forgot Password?
            </p></Link>



        </div>
    );
};

export default LoginPage;
