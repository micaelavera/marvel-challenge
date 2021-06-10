import React from 'react';
import './Card.css';

const Card = ({character}) => {
    return(
        <div className="card-container">
            <div className="favourites">
                <i className="far fa-star"></i>
            </div>
            <div className="img-character">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="character"/>
            </div>
            <div className="name-character">
                <h2>{character.name}</h2>
            </div>
        </div>
    );
}

export default Card;