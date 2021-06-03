import React from "react";
import './Navbar.css';
import logo from '../images/logo-marvel.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="logo"/>
            </a>
            <input type="search" class="fas" placeholder="&#xf002; Search"/>
            <i class="star far fa-star"></i>
        </div>
    );
}

export default Navbar;