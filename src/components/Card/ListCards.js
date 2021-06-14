import React from 'react';
import { Link } from "react-router-dom";
import Card from "./Card";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {

    return(
        <div className="container-characters">
            {characters.map((character) => (
                //<Link to={`/character/${character.id}`}>
                    <Card 
                        character = {character}
                        key = {character.id}
                    />
              //  </Link>
            ))}
            {/* <button onClick={() => toggleModal()}> CLICK ME</button>
            <Modal show={modal} close={toggleModal}/> */}

        </div>
        );
}

export default ListCards;