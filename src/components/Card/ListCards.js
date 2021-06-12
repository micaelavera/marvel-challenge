import React, { useState } from 'react';
import Card from "./Card";
import Modal from "../Modal";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {

    const[modal, setModal]= useState(false);

    const openModal = () => {
        setModal(true);
    }

    return(
        <div className="container-characters">
            {characters.map(element => (
                <Card 
                    character = {element}
                    key = {element.id}
                />
            ))}
            <button onClick={() => openModal()}> CLICK ME</button>
            <Modal show={modal}/>
        </div>
        );
}

export default ListCards;