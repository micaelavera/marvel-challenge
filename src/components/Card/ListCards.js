import React, { useState } from 'react';
import Card from "./Card";
import Modal from "../Modal";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {

    const[modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal);
    }
    
    return(
        <div className="container-characters">
            {characters.map(element => (
                <Card 
                    character = {element}
                    key = {element.id}
                />
            ))}
            <button onClick={() => toggle()}> CLICK ME</button>
            <Modal show={modal} close={toggle}/>
        </div>
        );
}

export default ListCards;