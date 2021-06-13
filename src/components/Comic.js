import React from 'react';

const Comic = ({comic}) => {
    return (
        <div className="comic">
            <div className="title-comic">
                 <h3>{comic.title}</h3> 
            </div>
            <div className="img-comic">
             <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="comic"/>
            </div>
        </div>
    );
}

export default Comic;