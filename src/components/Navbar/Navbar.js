import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo-marvel.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-brand">
                <img src={logo} alt="logo"/>
            </div>
            <input type="text" className="input-search form-control fas" placeholder="&#xf002; Search"/>
            <button><i className="favourite far fa-star"></i></button>
        </div>
    );
}

export default Navbar;