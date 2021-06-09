import React from 'react';
import './Card.css';

const Card = ({name,image}) => {
    return(
    <div className="card-container">
        <div className="favourites">
            <i className="fav far fa-star"></i>
        </div>
        <div className="img-character">
            <img src={image} alt="character-img"/>
        </div>
        <div className="name-character">
            <h2>{name}</h2>
        </div>
        
    </div>
    );
}

export default Card;