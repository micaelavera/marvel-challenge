import React from 'react';
import MarvelAPI from '../api/MarvelAPI';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return(
        <div className="header">
            <Navbar/>
            <MarvelAPI/>
            {/* <Character/> */}
        </div>
    );
}

export default Home;