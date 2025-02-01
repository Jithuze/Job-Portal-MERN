import { useState, useEffect } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import Cookies from 'js-cookie';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [userName, setUserName] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    const removeCookies = () => {
        Cookies.remove('user');
        Cookies.remove('role'); // Remove role cookie on logout
        navigate('/login'); // Navigate to the login page
        window.location.reload();
    };

    useEffect(() => {
        const userNameFromCookie = Cookies.get('user');
        const userRoleFromCookie = Cookies.get('role');

        if (userNameFromCookie) {
            setUserName(userNameFromCookie);
        } else {
            setUserName(null);
        }

        if (userRoleFromCookie) {
            setUserRole(userRoleFromCookie);
        }
    }, []);

    const getHomeLink = () => {
        if (userRole === 'hr') {
            return '/hr';
        } else if (userRole === 'admin') {
            return '/admin';
        } else {
            return '/'; // Default for 'user' or no role
        }
    };

    return (
        <div>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand ml-6">
                    <a className="navbar-item" href="/">
                        <img src="./src/assets/job-logo.png" alt="" />
                        <span className='has-text-weight-bold is-family-monospace'>Jobshala</span>
                    </a>
                    <a
                        role="button"
                        className={`navbar-burger ${isActive ? 'is-active' : ''}`}
                        aria-label="menu"
                        aria-expanded={isActive}
                        data-target="navbarBasicExample"
                        onClick={toggleMenu}
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start is-align-items-center has-text-weight-medium menu">
                        <Link to={getHomeLink()}>
                            <span className="navbar-item">Home</span>
                        </Link>
                        <Link to={'/jobs'}>
                            <span className="navbar-item">Browse Jobs</span>
                        </Link>
                    </div>

                    <div className="navbar-end mr-6">
                        {userName && (
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    <div className="username-navbar">
                                        {userName && <span>{userName}</span>}
                                    </div>
                                </a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">Applied Jobs</a>
                                    <a className="navbar-item">Saved Jobs</a>
                                    <a className="navbar-item">Profile</a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item" onClick={removeCookies}>Logout</a>
                                </div>
                            </div>
                        )}

                        {!userName && (
                            <div className="navbar-item">
                                <div className="buttons">
                                    <Link to={'/signup'}>
                                        <a className="button-medium"><strong>Sign up</strong></a>
                                    </Link>
                                    <Link to={'/login'}>
                                        <a className="button-medium2 is-light">Log in</a>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;