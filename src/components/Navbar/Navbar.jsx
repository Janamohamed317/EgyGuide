import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AppContext } from '../Context/AppContext';

const Navbar = () => {
    const { LoggedOut } = useContext(AppContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'transparent' }}>
            <div className="container-fluid">
                <Link className="navbar-brand " to="/">EGYGuide</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/trip-input">Trip Details</Link>
                        </li>
                        {
                            LoggedOut && <li className="nav-item">
                                <Link className="nav-link " to="/signin">Login</Link>
                            </li>
                        }
                        {
                            !LoggedOut && <li className="nav-item">
                                <Link className="nav-link " to="/signin">Log out</Link>
                            </li>
                        }

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;