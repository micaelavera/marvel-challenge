import React from 'react';
import ListCards from '../Card/ListCards'
import ListRandomCharacter from '../RandomCharacter/ListRandomCharacter';
import useCharacters from '../../hooks/useCharacters';
import useRandomCharacter from '../../hooks/useRandomCharacter';
import Loading from '../Loading/Loading';
    
    const Cards = () => {
    
        const { isLoadingCharacter , characters } = useCharacters();
        const { isLoading , randomCharacter } = useRandomCharacter();

     return(
            <>
            <div className="cards">
               {isLoading ? <Loading name={"Searching the character of the day"}/> : <ListRandomCharacter randomCharacter = {randomCharacter}/> }
               {isLoadingCharacter ? <Loading name={'Searching characters'}/> : <ListCards characters = {characters}/>}
            </div>
            </>
    );
}

export default Cards;
