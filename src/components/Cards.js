import React from 'react';
import ListCards from '../components/Card/ListCards'
//import ListRandomCharacter from '../components/RandomCharacter/ListRandomCharacter';
import useCharacters from '../hooks/useCharacters';
//import useRandomCharacter from '../hooks/useRandomCharacter';

    //const [randomCharacter, isLoadingCharacter] = useRandomCharacter();
    //const [characters, isLoading] = useCharacters();
    
    const Cards = () => {
    
        const {isLoading, characters} = useCharacters();

     return(
            <>
                <ListRandomCharacter randomCharacter = {randomCharacter}/>
                <ListCards characters = {characters}/>
            </>
    );
}

export default Cards;
