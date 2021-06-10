import React,{useState,useEffect} from 'react';

const useCharacters = () => {
    
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getCharacters = async () => {
        const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=e0b9a1aef53742cc955deb022e25767b&hash=11e78a321dac6fe1b0158f5cf846ece7`);
        const json = await response.json();
        return json.data.results;
    }

    useEffect(() => {
        getCharacters()
          .then((character) => {
            setCharacters(character); 
          })
          .finally(() => setIsLoading(false));
      }, []); 
    
      return [characters,isLoading];
    };

export default useCharacters;