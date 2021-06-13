import {useState,useEffect} from 'react';
import {getCharacters} from '../api/MarvelAPI';

const useCharacters = () => {
    
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getCharacters()
          .then((character) => {
            setCharacters(character); 
          })
          .finally(() => setIsLoading(false));
      }, []); 
    
      return [characters, isLoading];
    };

export default useCharacters;