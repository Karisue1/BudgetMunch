import React, { useState } from 'react';
import './Login.css';  // Assuming you have already styled the Login form in Login.css
import { FaUserGraduate } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [showRegistrationForm, setShowRegistrationForm] = useState(false);  // Manage form visibility state
    const [error, setError] = useState("");
    const [registrationError, setRegistrationError] = useState("");
    const [userNameExists, setUserNameExists] = useState(false);

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

    // Destructure loginData and registrationData
    const { username: loginUsername, password: loginPassword } = loginData;
    const { name, username: regUsername, email, password: regPassword } = registrationData;

    // Handle input changes for login and registration forms
    const handleLoginChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleRegistrationChange = (e) => {
        setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
    };

    const checkUsername = async (username) => {
        if (username) {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/budget/check-username/${username}`);
                if (response.data === true) {
                    setUserNameExists(true);
                    setRegistrationError("Username already exists");
                } else {
                    setUserNameExists(false);
                    setRegistrationError("");
                }
            } catch (error) {
                console.error("Error checking username", error);
            }
        } else {
            setUserNameExists(false);
            setRegistrationError("");
        }
    };

    const openRegistrationForm = () => {
        setShowRegistrationForm(true);
    };

    const openLoginForm = () => {
        setShowRegistrationForm(false);
    };

    let navigate = useNavigate();

    // Registration form submission handler
    const onSubmitRegister = async (e) => {
        e.preventDefault();
        const userData = {
            customerName: name,  // Matches to the 'customerName' field in the backend
            userName: regUsername,  // Matches to the 'userName' field in the backend
            email,
            password: regPassword,
        };

        try {
            await axios.post("http://localhost:8080/api/v1/budget/register", userData);
            // Reset the registration form fields after successful registration
            setRegistrationData({
                name: "",
                username: "",
                email: "",
                password: ""
            });
            setRegistrationError(""); // Clear any registration error message
            setShowRegistrationForm(false); // Optionally close the registration form
            navigate("/login"); // Redirect to the login page
        } catch (error) {
            if (error.response && error.response.status === 409) {
                setRegistrationError("Username already exists. Please choose a different one.");
            } else {
                console.error("There was an error registering the user!", error);
                setRegistrationError("An error occurred. Please try again.");
            }
        }
    };

    // Login form submission handler
    const onSubmitLogin = async (e) => {
        e.preventDefault();
        const loginUserData = { userName: loginUsername, password: loginPassword };

        try {
            const response = await axios.post("http://localhost:8080/api/v1/budget/login", loginUserData);
            if (response.status === 200) {
                // Reset the login form fields after successful login
                setLoginData({
                    username: "",
                    password: ""
                });
                setError(""); // Clear any login error message
                navigate("/"); // Redirect to the home page
            }
        } catch (error) {
            console.error("Login failed!", error);
            setError("Invalid username or password.");
        }
    };

    return (
        <div className="login-container">  {/* Flex container for centering */}
            {!showRegistrationForm ? (
                <div className='wrapper'>  {/* Wrapper for the form content */}
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
                            <FaUserGraduate className="icon" />
                        </div>
                        <div className="input-box">
                            <input
                                type="password"
                                name="password"
                                value={loginPassword}
                                placeholder='Password'
                                required
                                onChange={handleLoginChange}
                            />
                            <RiLockPasswordFill className="icon" />
                            <br />
                            <a href="#">Forgot password?</a>
                        </div>
                        <div className="forgot-password">
                            <label><input type="checkbox" />Remember me</label>
                            <br />
                        </div>
                        <button type="submit" className="btn btn-warning">Login</button>
                        <div className='register-link'>
                            <p>Don't have an account? <a href="#" onClick={openRegistrationForm}>Register now here</a></p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="registrationForm">
                    {registrationError && <div className="alert alert-danger" role="alert">{registrationError}</div>}
                    <div className='wrapper'>  {/* Wrapper for the form content */}
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
                                    onChange={handleRegistrationChange}
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
                                        handleRegistrationChange(e); // Update registration state
                                        checkUsername(e.target.value); // Check if username exists
                                    }}
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    placeholder='Password'
                                    name="password"
                                    value={regPassword}
                                    onChange={handleRegistrationChange}
                                    required
                                />
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
    );
};

export default Login;
