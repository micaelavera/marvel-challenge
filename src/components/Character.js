import React from 'react';

const Character = (props) => {
    return (
        <div className="random-character">
            <h1>{props.name}</h1>
            <div className="img-character">
            </div>
        </div>
    );
}

export default Character;