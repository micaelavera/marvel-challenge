import { useContext, useState, useEffect } from 'react';
import { getRandomCharacter } from '../api/MarvelAPI.js';
import RandomCharacterContext from '../contexts/RandomCharacterContext';

const useRandomCharacter = () => {
    
    //const [randomCharacter, setRandomCharacter] = useState([]);
    const {randomCharacter, setRandomCharacter} = useContext(RandomCharacterContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRandomCharacter()
          .then((random) => {
            console.log(random);
            setRandomCharacter(random); 
          })
          .finally(() => setIsLoading(false));
      }, [setRandomCharacter]);

      //return [randomCharacter, isLoading];
      return {randomCharacter, isLoading};
    };

export default useRandomCharacter;