import React from 'react';
import ListCards from '../components/Card/ListCards';
import Cards from '../components/Cards';
import Navbar from '../components/Navbar/Navbar';
import useCharacters from '../hooks/useCharacters';

const Home = () => {
        const {isLoading, characters} = useCharacters();
         return(
             <>
               <Navbar/>
               <Cards/>
             </>
        );
}

export default Home;
