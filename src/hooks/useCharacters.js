import { useContext, useState, useEffect } from 'react';
import { getCharacters } from '../api/MarvelAPI';
import  CharacterContext from '../contexts/CharacterContext';

const useCharacters = (name) => {
  
    const {characters, setCharacters} = useContext(CharacterContext);
    const [isLoadingCharacter, setIsLoading] = useState(true);

    useEffect(() => {
        getCharacters(name)
          .then((character) => {
            setCharacters(character); 
          })
          .finally(() => setIsLoading(false));
      }, [setCharacters]); 
    
      return {characters, isLoadingCharacter};
    };

export default useCharacters;