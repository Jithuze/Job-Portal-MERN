import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('user');  // State for dropdown
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [dropdownActive, setDropdownActive] = useState(false);  // Toggle dropdown visibility
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!username || !password || !confirmPassword) {
            setError("All fields are required");
            clearMessages();
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            clearMessages();
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/api/user_signup', {
                user_name: username,
                user_password: password,
                user_role: role // Send the selected role
            });

            if (response.status === 201) {
                setSuccess("User registered successfully!");
                setError('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');
                clearMessages();

                setTimeout(() => {
                    navigate('/login');
                }, 3000);
            }
        } catch (error) {
            if (error.response) {
                if (error.response.status === 409) {
                    setError("User already exists");
                } else {
                    setError(error.response.data.message || "Something went wrong. Please try again.");
                }
            } else {
                setError("Network error. Please try again.");
            }
            clearMessages();
        }
    };

    const clearMessages = () => {
        setTimeout(() => {
            setError('');
            setSuccess('');
        }, 3000);
    };

    const handleRoleSelect = (selectedRole) => {
        setRole(selectedRole);  // Update the selected role
        setDropdownActive(false);  // Close the dropdown after selection
    };

    const toggleDropdown = () => {
        setDropdownActive(!dropdownActive);  // Toggle dropdown visibility
    };

    return (
        <div className='login-main'>
            <div className="login-container">
                <DotLottieReact src="src/assets/Login-animation.lottie" loop autoplay />
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
                    <input
                        className="input is-medium"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    
                    {/* Role Selection Dropdown */}
                    <div className="dropdown is-active">
                        <div className="dropdown-trigger">
                            <button
                                className="button"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                onClick={toggleDropdown}  // Toggle dropdown on button click
                            >
                                <span>{role.charAt(0).toUpperCase() + role.slice(1)} Role</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </button>
                        </div>
                        {dropdownActive && (
                            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                                <div className="dropdown-content">
                                    <a
                                        href="#"
                                        className="dropdown-item"
                                        onClick={() => handleRoleSelect('user')}
                                    >
                                        User
                                    </a>
                                    <a
                                        href="#"
                                        className="dropdown-item"
                                        onClick={() => handleRoleSelect('hr')}
                                    >
                                        HR
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                {success && <p style={{ color: "green" }}>{success}</p>}
                <div>
                    <span>Already Have An Account ?</span>
                    <Link to={'/login'}>
                        <span> Login</span>
                    </Link>
                </div>
                <div className="signup-button">
                    <button className='button-big' onClick={handleSignup}>SignUp</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;