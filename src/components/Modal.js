import React from 'react';
import './Modal.css'
const Modal = ({character, show, close}) => {

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
                    <p>comics</p>
                </div>
            </div>
        </div>
        : null}
        </>
    );
}

export default Modal;