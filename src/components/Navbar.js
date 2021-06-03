import React from "react";
// import logo from './images/logo-marvel.png';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* <img src={logo}/>  */}
            <input type="text" class="fas" placeholder="&#xf002; Search"/>
            <i class="fas fa-star"></i>
        </div>
    );
}

export default Navbar;