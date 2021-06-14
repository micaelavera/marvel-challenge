import React from 'react';
import './Modal.css'
import useComics from '../../hooks/useComics';
import ListComics from '../Comic/ListComics';

const Modal = ({character, show, close}) => {

    const [comics, isLoading] = useComics(character.id);
    
    return (
        <>
         {
        show ?
        <div className="modal-container">
             <div className="modal"> 
                <div className="header">
                    <div className="character-title">
                        <h2>{character.name}</h2>
                    </div>
                    <button className="close" onClick={() => close()}>
                        <i className="close fas fa-window-close"></i>
                    </button>
                </div>
                <div className="character-description">
                        <p>{character.description}</p>
                    </div>
                    <div className="character-comics">
                        {isLoading ? <div>Loading...</div> : <ListComics comics = {comics}/> } 
                </div>
            </div>
        </div>
        : null}
        </>
    );
}

export default Modal;