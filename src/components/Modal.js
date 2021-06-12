import React from 'react';
import './Modal.css'
const Modal = ({show}) => {
    return (
        <>
         {
        show ?
        <div className="modal-container">
            <header className="header">
            <button className="close">
            <i className="fas fa-window-close"></i>
            </button>
            <div className="character-title">
                <h2>Character</h2>
            </div>
            </header>
            <div className="character-description">
                <p>Description</p>
            </div>
            <div className="character-comics">
            <p>comics</p>
            </div>

            
        </div>
        : null}
        </>
    );
}

export default Modal;