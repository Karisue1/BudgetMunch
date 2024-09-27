import React, { useState } from 'react';
import './Login.css';  // Assuming you have already styled the Login form in Login.css
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);  // Manage form visibility state
    
    const [user, setUser]= useState({
        name: "",
        email: "",
        username: "",
        password: ""
    });

    const { name, email, username, password } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const openRegistrationForm = () => {
        setShowRegistrationForm(true);
    };

    const openLoginForm = () => {
        setShowRegistrationForm(false);
    };

    let navigate = useNavigate();

    const onSubmit = async (e) => {
        // Prevent form submission until all checks are passed
       // e.preventDefault();
        //axios will post the information using backend post
        //await is for waiting the for the promise to be fulfilled
        //await axios.post("http://localhost:8080/user",user)
        //this will navigate to the homepage when submitted
        navigate("/login")
    };

    return (
        <div className="login-container">  {/* Flex container for centering */}
            {!showRegistrationForm ? (
                <div className='wrapper'>  {/* Wrapper for the form content */}
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder='Username' required />
                            <FaUserGraduate className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder='Password' required />
                            <RiLockPasswordFill className="icon" />
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="forgot-password">
                            
                            <label><input type="checkbox" />Remember me</label>
                            <br/>
                            
                        </div>
                        <button type="submit" class="btn btn-warning">Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <a href="#" onClick={openRegistrationForm}>Register now here</a></p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="registrationForm">
                    <div className='wrapper'>  {/* Wrapper for the form content */}
                        <form onSubmit={onSubmit}>
                            <h1>Register</h1>

                            <div className="input-box">
                                <input 
                                type="text"
                                placeholder='Name'
                                name="name"
                                value={name} 
                                onChange={onInputChange}
                                required />
                            </div>
                            
                            <div className="input-box">
                                <input 
                                type="email" 
                                placeholder='Email'
                                name="email"
                                value={email} 
                                onChange={onInputChange}
                                required />
                            </div>

                            <div className="input-box">
                                <input 
                                type="text" 
                                placeholder='Username'
                                name="username"
                                value={username} 
                                onChange={onInputChange} 
                                required />
                            </div>

                            <div className="input-box">
                                <input 
                                type="password" 
                                placeholder='Password' 
                                name="password"
                                value={password} 
                                onChange={onInputChange} 
                                required />
                            </div>
                            
                            <button 
                             type="submit"
                             class="btn btn-outline-primary"
                            >Complete Registration</button>
                            <div className='register-link'>
                                <p>Already have an account? <a href="#" onClick={openLoginForm}>Login here</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
