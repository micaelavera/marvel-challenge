import {useState,useEffect} from 'react';
import {getRandomCharacter} from '../api/MarvelAPI.js';

const useRandomCharacter = () => {
    
    const [randomCharacter, setRandomCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRandomCharacter()
          .then((random) => {
            setRandomCharacter(random); 
          })
          .finally(() => setIsLoading(false));
      }, []);

      return [randomCharacter, isLoading];
    };

export default useRandomCharacter;