import { useContext, useState, useEffect } from 'react';
import { getCharacters } from '../api/MarvelAPI';
import  CharacterContext from '../contexts/CharacterContext';

const useCharacters = () => {
  
    const {characters, setCharacters} = useContext(CharacterContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCharacters()
          .then((character) => {
            setCharacters(character); 
          })
          .finally(() => setIsLoading(false));
      }, [setCharacters]); 
    
      return {characters, isLoading};
    };

export default useCharacters;