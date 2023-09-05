import React, { useState } from "react";
import "./form.css"

const BasicForm = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const SubmitForm = (e) => {
        e.preventDefault();
        const newEntry = {username:username, password:password};

        console.log(newEntry);
    }

    return (
        <>
            <form action="" onSubmit={SubmitForm} className="login-form">
            <div className="login-heading">Login Form</div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control" />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </>
    )
}

export default BasicForm