import React from 'react';
import Navbar from './Navbar';
import Character from './Character';

const Home = () => {
    return(
        <div className="header">
            <Navbar/>
            <Character/>
        </div>
        );
}

export default Home;