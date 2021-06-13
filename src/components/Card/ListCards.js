import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";
import Modal from "../Modal";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {

    /* const[modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
 */


    return(
        <div className="container-characters">
            {characters.map(element => (
                <Link to={`/character/${element.id}`}>
                    <Card 
                        character = {element}
                        key = {element.id}
                    />
                </Link>
            ))}
            {/* <button onClick={() => toggleModal()}> CLICK ME</button>
            <Modal show={modal} close={toggleModal}/> */}

        </div>
        );
}

export default ListCards;