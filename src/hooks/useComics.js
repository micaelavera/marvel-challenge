import { useState, useEffect } from 'react';
import { getComics } from '../api/MarvelAPI'

const useComics = (id) => {
    
    const [comics, setComics] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getComics(id)
          .then((comic) => {
            console.log(comic);
            setComics(comic); 
          })
          .finally(() => setIsLoading(false));
      }, [id]);

      return [comics, isLoading];
    };


export default useComics;