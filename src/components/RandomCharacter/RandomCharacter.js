import React from 'react';
import './Character.css';

const Character = ({name, image}) => {
    return (
        <div className="character">
            <div className="title-character">
                <h1>{name}</h1>
            </div>
            <div className="img-character">
                <img src={image} alt="character"/>
            </div>
        </div>
     );
}

export default Character;