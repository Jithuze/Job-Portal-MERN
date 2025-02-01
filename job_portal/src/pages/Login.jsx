import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!username || !password) {
            setError('Please fill in both fields');
            return;
        }
    
        try {
            // Fetch users from the backend
            const response = await axios.get('http://localhost:3000/api/get_users');
            console.log('Backend Response:', response.data); // Log the response
    
            // Ensure the response is an array
            if (!Array.isArray(response.data)) {
                setError('Invalid response from the server');
                return;
            }
    
            const users = response.data;
            console.log('Users:', users); // Log the users array
    
            // Check if the user exists and the password matches
            const user = users.find(
                (u) => u.user_name === username && u.user_password === password
            );
            console.log('Found User:', user); // Log the found user
    
            if (user) {
                // Set cookie with user information
                Cookies.set('user', user.user_name, { expires: 7 });
                Cookies.set('role', user.user_role, {expires: 7 });
                
                switch (user.user_role) {
                    case 'admin':
                        navigate('/admin');
                        break;
                    case 'hr':
                        navigate('/hr');
                        break;
                    case 'user':
                        navigate('/');
                        break;
                    default:
                        navigate('/');
                        break;
                }
    
                window.location.reload(); // Refresh the page to apply changes
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            console.error('Error fetching users:', error);
            setError('An error occurred while logging in');
        }
    };

    return (
        <div className='login-main'>
            <div className="login-container">
                <DotLottieReact
                    src="src/assets/Login-animation.lottie"
                    loop
                    autoplay
                />
                <div className="login-inputs">
                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="input is-medium"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <div className="input-buttons">
                    <div>
                        <span>Forgot password ?</span>
                        <Link to="/reset-password">
                            <span> Reset Now</span>
                        </Link>
                    </div>
                    <div>
                        <span>Don't Have An Account ?</span>
                        <Link to="/signup">
                            <span> SignUp</span>
                        </Link>
                    </div>
                </div>
                <div className="signup-button">
                    <button className='button-big' onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Login;