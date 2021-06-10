import React from 'react';
import Card from "./Card";
import './ListCards.css';

const ListCards = ({ characters = [] }) => {
    return(
        <div className="container-characters">
            {characters.map(element => (
                <Card 
                    character = {element}
                    key = {element.id}
                />
            ))}
        </div>
        );
}

export default ListCards;