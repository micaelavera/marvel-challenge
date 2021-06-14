import React from 'react';
import Card from "./Card";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {

    return(
        <div className="container-characters">
            {characters.map((character) => (
                    <Card 
                        character = {character}
                        key = {character.id}
                    />
            ))}
        </div>
        );
}

export default ListCards;