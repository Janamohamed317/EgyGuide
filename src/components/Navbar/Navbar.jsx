import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AppContext } from '../Context/AppContext';
import {imgs} from '../../assets/assets'
const Navbar = () => {
    const { isLoggedIn, handleLogout } = useContext(AppContext);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'transparent' }}>
            <div className="container-fluid">
                <Link className="navbar-brand " to="/"><img src={imgs.logo} style={ {width: '100px', height: '100px' }} alt="Logo" /></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav" style={{paddingBottom:'50px'}}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link " to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link " to="/trip-input">Trip Details</Link>
                        </li>
                        {isLoggedIn &&
                            <li className="nav-item">
                                <Link className="nav-link " to="/profile">Profile</Link>
                            </li>}
                        {
                            isLoggedIn ? <li className="nav-item">
                                <Link className="nav-link " onClick={handleLogout}>Log out</Link>
                            </li> : <li className="nav-item">
                                <Link className="nav-link " to="/signin">Login</Link>
                            </li>
                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;