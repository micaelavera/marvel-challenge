import React, { useEffect, useState } from 'react';
import './Modal.css'
import useComics from '../hooks/useComics';
import ListComics from './ListComics';
import { getComics } from '../api/MarvelAPI';

const Modal = ({character, show, close}) => {

    // const[modal, setModal] = useState(false);
   // const [comic, setComic] = useState([]);
    //const [comic, isLoading] = useComics([]);
    const [comic, setComic] = useState([]);

    useEffect(() => {
        const getComics = async () => {
            const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters/${character.id}/comics?&ts=1&apikey=e0b9a1aef53742cc955deb022e25767b&hash=11e78a321dac6fe1b0158f5cf846ece7`);
            const json = await response.json();
            const comics = json.data.results;
            setComic(comics);
        }
        getComics();    
    },[character.id]);

    console.log(character.comics.available)

    /* const toggleModal = () => {
        setModal(!modal);
    }

    u*/
    /* useEffect(() => {
        getComics(character.id);
    }, [comic]); 

    const getComics = async () => {
        const response = await fetch(`${baseURL}/characters/${characterId}/comics&ts=1&apikey=${publicKey}&hash=${hash}`);
        const json = await response.json();
        const comics = json.data.results;
        setComic(comics);
    } 
*/
    return (
        <>
         {
        show ?
        <div className="modal-container">
            <div className="modal">
                <button className="close" onClick={() => close()}>
                    <i className="fas fa-window-close"></i>
                </button>
                <div className="character-title">
                     <h2>{character.name}</h2>
                </div>
                <div className="character-description">
                    <p>{character.description}</p>
                </div>
                <div className="character-comics">
                {comic.map((element)=> (
                    <h1>{element.title}</h1>
                ))}
                    {/* <ListComics comic = {comic}/> */}
                </div>
            </div>
        </div>
        : null}
        </>
    );
}

export default Modal;