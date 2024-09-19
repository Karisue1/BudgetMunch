import React from 'react';
import './Login.css';  // Assuming you have already styled the Login form in Login.css
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {
    return (
        <div className="login-container">  {/* Flex container for centering */}
            <div className='wrapper'>  {/* Wrapper for the form content */}
                <form action="" >
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUserGraduate className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <RiLockPasswordFill className="icon" />
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
    );
}

export default Login;
