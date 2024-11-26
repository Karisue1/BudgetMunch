import React, { useState,useEffect } from 'react';
import './Login.css'
import './ResetPassword.js'; 
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate, Link } from 'react-router-dom';
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import Navbar from '../../layout/Navbar.js';

const Login = () => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);
    const [error, setError] = useState("");
    const [emailError, setEmailError] = useState("");  // Separate error state for email
    const [userNameError, setUserNameError] = useState("");  // Separate error state for username
    const [showPassword, setShowPassword] = useState(false); //state to show password or not
   
    // State for login form
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    // State for registration form
    const [registrationData, setRegistrationData] = useState({
        name: "",
        username: "",
        email: "",
        password: ""
    });

    const { username: loginUsername, password: loginPassword } = loginData;
    const { name, username: regUsername, email, password: regPassword } = registrationData;

    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegistrationChange = (e) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    };

    //toggle to show password or not
    const passwordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const checkEmail = async (email) => {
        if (email) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/budget/check-email/${email}`);
                if (response.data === true) {
                    setEmailError("Email already exists."); // Set email error
                } else {
                    setEmailError(""); // Clear email error if email doesn't exist
                }
            } catch (error) {
                console.error("Error checking email", error);
            }
        } else {
            setEmailError(""); // Clear error if no email is provided
        }
    };

    const checkUsername = async (username) => {
        if (username) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/budget/check-username/${username}`);
                if (response.data === true) {
                    setUserNameError("Username already exists."); // Set username error
                } else {
                    setUserNameError(""); // Clear username error if username doesn't exist
                }
            } catch (error) {
                console.error("Error checking username", error);
            }
        } else {
            setUserNameError(""); // Clear error if no username is provided
        }
    };

    const openRegistrationForm = () => {
        setShowRegistrationForm(true);
    };

    const openLoginForm = () => {
        setShowRegistrationForm(false);
    };

    let navigate = useNavigate();

    const onSubmitRegister = async (e) => {
        e.preventDefault();
        
        // Reset errors before checking registration
        setEmailError("");
        setUserNameError("");
    
        const userData = {
            customerName: name,
            userName: regUsername,
            email:email,
            password: regPassword,
        };
    
        try {
            await axios.post("http://localhost:8080/api/v1/budget/register", userData);
            setRegistrationData({
                name: "",
                username: "",
                email: "",
                password: ""
            });
            setShowRegistrationForm(false);
            navigate("/login");
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    const errors = error.response.data;
                    // Set specific errors for email and username if they exist in the response
                    if (errors.includes("Email already exists")) {
                        setEmailError("Email already exists.");
                    }
                    if (errors.includes("Username already exists")) {
                        setUserNameError("Username already exists.");
                    }
                } else {
                    setError("An error occurred. Please try again.");
                }
            } else {
                console.error("There was an error registering the user!", error);
                setError("An error occurred. Please try again.");
            }
        }
    };
  
    useEffect(() => {
        // Reset loginData fields when component unmounts or when switching forms
        return () => {
            setLoginData({
                username: "",
                password: ""
            });
        };
    }, [showRegistrationForm]); // Re-run effect when form view changes

    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const loginUserData = { userName: loginUsername, password: loginPassword };
    
        try {
            const response = await axios.post("http://localhost:8080/api/v1/budget/login", loginUserData);
            if (response.status === 200) {
                const user = response.data; // User details returned from the backend
                setLoginData({ username: "", password: "" });
                setError("");
                // Save user data in localStorage or context
                localStorage.setItem('user', JSON.stringify(user));
                // Redirect to home or keep the user logged in
                navigate("/");
            }
        } catch (error) {
            console.error("Login failed!", error);
            setError("Invalid username or password.");
        }
    };
    
    
    

    return (
        <>
            {/* Navbar displayed above the login content */}
            <div className='navebar'>
                <Navbar />
            </div>
            
            <div className="login-container">
                {!showRegistrationForm ? (
                    <div className='wrapper'>
                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <form onSubmit={onSubmitLogin}>
                            <h1>Login</h1>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="username"
                                    value={loginUsername}
                                    placeholder='Username'
                                    required
                                    onChange={handleLoginChange}
                                />
                                {/* <FaUserGraduate className="icon" /> Icon that was out of place 
                                by username field */}
                            </div>
    
                            <div className="password-container">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={loginPassword}
                                    placeholder='Password'
                                    required
                                    onChange={handleLoginChange}
                                />
                                <span onClick={passwordVisibility} className="eye-icon">
                                    {showPassword ? <BiHide /> : <BiShow />}
                                </span>
                            </div>
    
                            <button type="submit" className="btn btn-warning">Login</button>
    
                            <div className="forgot-password">
                                <br/>
                                <Link className='forgot-password' to='/reset-password'>Forgot Password?</Link>
                            </div>
                            
                            <div className='register-link'>
                                <p>Don't have an account? <a href="#" onClick={openRegistrationForm}>Register now here</a></p>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="registrationForm">
                        {emailError && <div className="alert alert-danger" role="alert">{emailError}</div>}
                        {userNameError && <div className="alert alert-danger" role="alert">{userNameError}</div>}
                        <div className='wrapper'>
                            <form onSubmit={onSubmitRegister}>
                                <h1>Register</h1>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        placeholder='Name'
                                        name="name"
                                        value={name}
                                        onChange={handleRegistrationChange}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="email"
                                        placeholder='Email'
                                        name="email"
                                        value={email}
                                        onChange={(e) => {
                                            handleRegistrationChange(e);
                                            checkEmail(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="input-box">
                                    <input
                                        type="text"
                                        placeholder='Username'
                                        name="username"
                                        value={regUsername}
                                        onChange={(e) => {
                                            handleRegistrationChange(e);
                                            checkUsername(e.target.value);
                                        }}
                                        required
                                    />
                                </div>
                                <div className="password-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder='Password'
                                        name="password"
                                        value={regPassword}
                                        onChange={handleRegistrationChange}
                                        required
                                    />
                                    <span onClick={passwordVisibility} className="eye-icon">
                                        {showPassword ? <BiHide /> : <BiShow />}
                                    </span>
                                </div>
                                <button type="submit" className="btn btn-outline-primary">Complete Registration</button>
                                
                                <div className='register-link'>
                                    <p>Already have an account? <a href="#" onClick={openLoginForm}>Login here</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default Login;