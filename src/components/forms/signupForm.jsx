// SignupForm.jsx

import React, { useState } from "react";
import "./form.css"

const SignupForm = ({ onSubmit }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { email, username, password, confirmpassword };
        setUsername("");
        setPassword("");

        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">

            <div className="login-heading">Signup Form</div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                    type="password"
                    name="confirmpassword"
                    id="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                />
            </div>

            <div className="button-container">
                <button type="submit" className="btn btn-primary">Signup</button>
            </div>
        </form>
    );
}

export default SignupForm;
