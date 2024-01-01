import { sendPasswordResetEmail } from 'firebase/auth'
import React from 'react'
import { auth } from './firebaseconfig';
import { Link } from 'react-router-dom';

const ForgetPass = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailval = e.target.email.value;
        sendPasswordResetEmail(auth, emailval).then(data => {
            alert('check your email');
        })
    }
    return (
        <div>
            <h1>Forget Password</h1>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
                <input name="email" /><br />
                <button >Reset</button>
            </form>

        </div>
    )
}

export default ForgetPass