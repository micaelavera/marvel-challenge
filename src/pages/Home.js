import React from 'react';
import {Switch, Route } from 'react-router-dom';
import ListCards from '../components/Card/ListCards';
//import Cards from '../components/Cards';
import Navbar from '../components/Navbar/Navbar';
import useCharacters from '../hooks/useCharacters';

const Home = () => {
        const {isLoading, characters} = useCharacters();
        
        console.log(characters);
        return(
                <>
                 <Navbar/>
                 <ListCards characters = {characters}/>
                </>
        );
}

export default Home;
