import React from 'react';
import './Login.css';
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from '../../layout/Navbar';

const Login = () => {
    return (
        <div>
            <div className='wrapper'>
                
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUserGraduate />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <RiLockPasswordFill />
                    </div>
                    <div className="forgot-password">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                    <div className='register-link'>
                        <p>Don't have an account? <a href="#">Register now here</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
