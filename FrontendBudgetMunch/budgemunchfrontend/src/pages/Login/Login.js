import React from 'react';
import './Login.css';
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from '../../layout/Navbar';

const Login = () => {
    return (
        <><div className="wrapper">
        <div className="login-container">
            <form action="">
                <h1>Login</h1>

                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUserGraduate className="input-icon" />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <RiLockPasswordFill className="input-icon" />
                </div>

                <div className="forgot-password">
                    <label><input type="checkbox" /> Remember me</label>
                    
                </div>

                <button type="submit">Login</button>

                <div className="register-link">
                    
                </div>
            </form>
        </div>
    </div></>
    )
}

export default Login;
