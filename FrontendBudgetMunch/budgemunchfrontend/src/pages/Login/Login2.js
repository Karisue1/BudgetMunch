import { useState } from 'react';
import { useHistory } from 'react-router-dom';


export const Login = () => {
    const[errorMessage, setErrorMessage] = useState('');


    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const hstory = useHistory();

    const onLogInClicked = async () => {
        alert('Log in not implemented')
    }
    return(
        <div className="content-container">
            <h1>Login</h1>
            {errorMessage && <div className="fail">{errorMessage}</div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com"/>
            <input  
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password"/>
            <button 
                disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked}>Login</button>
            <button onClick={() => history.push('/reset-password')}>Forgot your password?</button> 
            <button onClick={() => history.push('/signup')}>Don't have an account? Sign up</button>   
        </div>
    )
}