import React from 'react';
import './RandomCharacter.css';

const Character = ({name, image}) => {
    return (
        <div className="container-character">
            <div className="character">
                <div className="title-character">
                    <h1>{name}</h1>
                </div>
                <div className="img-character">
                  <img src={image} alt="character"/>
                </div>
            </div>
        </div>
     );
}

export default Character;