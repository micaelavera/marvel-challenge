import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo-marvel.png';

const Navbar = () => {
    return (
        <div className="navbar navbar-light bg-light">
            <div className="navbar-brand">
                <img src={logo} alt="logo"/>
            </div>
            <input type="text" className="input-search form-control fas" placeholder="&#xf002; Search"/>
            <i className="favourite far fa-star"></i>
        </div>
    );
}

export default Navbar;