import React from 'react';
import ListCards from '../components/Card/ListCards'
import ListRandomCharacter from '../components/RandomCharacter/ListRandomCharacter';
import useCharacters from '../hooks/useCharacters';
import useRandomCharacter from '../hooks/useRandomCharacter';
    
    const Cards = () => {
    
        const { characters } = useCharacters();
        const { randomCharacter } = useRandomCharacter();

     return(
            <>
            <div className="cards">
                <ListRandomCharacter randomCharacter = {randomCharacter}/>
                <ListCards characters = {characters}/>
             </div>
            </>
    );
}

export default Cards;
