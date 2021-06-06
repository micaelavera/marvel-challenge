import React from 'react';
import Navbar from './Navbar/Navbar';
import Character from './Character';

const Home = () => {

    const baseURL = `https://gateway.marvel.com:443/v1/public/`;
    const publicKey = `e0b9a1aef53742cc955deb022e25767b`;
    const hash = `11e78a321dac6fe1b0158f5cf846ece7`;

    return(
        <div className="header">
            <Navbar/>
            {/* <Character/> */}
        </div>
    );
}

export default Home;