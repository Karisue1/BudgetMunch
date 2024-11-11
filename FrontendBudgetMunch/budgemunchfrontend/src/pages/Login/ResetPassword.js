
import React, { useState } from 'react';
import './ResetPassword.css';  
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    //TODO: MUST FIX ISSUE OF USER CLICKING ON SEND EMAIL TWICE,
    //THE CODE PICKS UP the first code that was sent via e-mail and disregards the second one

    
    const [emailError, setEmailError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [email, setEmail] = useState("");
    const [showCodeInput, setShowCodeInput] = useState(false);
    const [code, setCode] = useState("");
    const [showPasswordResetForm, setShowPasswordResetForm] = useState(false);
    const [firstNewPassword, setFirstNewPassword] = useState("");
    const [secondNewPassword, setSecondNewPassword] = useState("");
    const [showFirstPassword, setShowFirstPassword] = useState(false);
    const [showSecondPassword, setShowSecondPassword] = useState(false);
    
    const navigate = useNavigate();

    const onSendEmail = async (e) => {
        // prevents the form from actually submitting, giving you a chance
        // to validate or process the input before submitting it to the server
        // or updating the state of your React component. 
        e.preventDefault();
        setEmailError("");//resets the Email Error to be empty
        setSuccessMessage("");//resets the success message to be empty
    
        try {
            const emailExistsResponse = await axios.get(`http://localhost:8080/api/v1/budget/check-email/${email}`);
            if (emailExistsResponse.data === true) {
                await axios.post('http://localhost:8080/api/v1/budget/send-email', null, {
                    params: { to: email },
                });
                setSuccessMessage("E-mail verification sent successfully!");
                setShowCodeInput(true);
            } else {
                setEmailError("Email address does not exist within BudgetMunch.");
            }
        } catch (error) {
            setEmailError("An error occurred. Please try again.");
        }
    };

    const onVerifyCode = async (e) => {
        e.preventDefault();
        setEmailError("");
        setSuccessMessage("");

        try {
            await axios.post('http://localhost:8080/api/v1/budget/verify-code', null, {
                params: { email, code },
            });
            setSuccessMessage("Code verified successfully");
            setShowPasswordResetForm(true); // Show password reset form on successful code verification
        } catch (error) {
            setEmailError("Invalid code.");
        }
    };

    const onResetPassword = async (e) => {
        e.preventDefault();
        setEmailError("");
        setSuccessMessage("");

        if (firstNewPassword !== secondNewPassword) {
            setEmailError("Passwords do not match.");
            return;
        }
        
        try {
            await axios.post('http://localhost:8080/api/v1/budget/password-reset', null, {
                params: { email, newPassword: firstNewPassword },
            });
            setSuccessMessage("Password reset successfully!");
            navigate('/login');
        } catch (error) {
            setEmailError("Failed to reset password.");
        }
    };

    return (
        <div className="login-container">
            {!showPasswordResetForm ? (
                <div className="wrapper">
                    <form onSubmit={onSendEmail}>
                        <h1>Password Reset</h1>
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        {emailError && <div className="alert alert-danger">{emailError}</div>}
                        <div className="input-box">
                            <p>Please input your e-mail</p>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required 
                            />   
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-success">Send Email</button>
                    </form>

                    {showCodeInput && (
                        <form onSubmit={onVerifyCode}>
                            <div className="input-box">
                                <p>Please enter the 4-digit code sent to your email</p>
                                <input
                                    type="text"
                                    name="code"
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    placeholder="4-digit code"
                                    maxLength={4}
                                    required 
                                />   
                            </div>
                            <br/>
                            <br/>
                            <button type="submit" className="btn btn-primary">Verify Code</button>
                        </form>
                    )}
                </div>
            ) : (
                <div className="wrapper">
                    <form onSubmit={onResetPassword}>
                        {emailError && <div className="alert alert-danger">{emailError}</div>}
                        {successMessage && <div className="alert alert-success">{successMessage}</div>}
                        <div className="password-container">
                            <p>Enter new password</p>
                            <div className="input-with-icon">
                                <input
                                    type={showFirstPassword ? "text" : "password"}
                                    value={firstNewPassword}
                                    onChange={(e) => setFirstNewPassword(e.target.value)}
                                    placeholder="New password"
                                    required
                                />
                                <span onClick={() => setShowFirstPassword(!showFirstPassword)} className="eye-icon">
                                    {showFirstPassword ? <BiHide /> : <BiShow />}
                                </span>
                            </div>
                            <br/>
                            <p>Re-enter new password</p>
                            <div className="input-with-icon">
                                <input
                                    type={showSecondPassword ? "text" : "password"}
                                    value={secondNewPassword}
                                    onChange={(e) => setSecondNewPassword(e.target.value)}
                                    placeholder="Re-enter password"
                                    required
                                />
                                <span onClick={() => setShowSecondPassword(!showSecondPassword)} className="eye-icon">
                                    {showSecondPassword ? <BiHide /> : <BiShow />}
                                </span>
                            </div>
                        </div>
                        <br/><br/><br/><br/><br/><br/>
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ResetPassword;