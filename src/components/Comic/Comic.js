import React from 'react';
import './Comic.css';

const Comic = ({comic}) => {

    return (
        <div className="comic">
            <div className="title-comic">
                 <h3>{comic.title}</h3> 
            </div>
            <div className="date-publication">
            <h3>On-Sale Date: {new Date(comic.dates[0].date).toLocaleDateString()}</h3>
            </div>
            <div className="content">
                <div className="img-comic">
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="comic"/>
                </div>
                <div className="description-comic">
                    <h1>Description</h1>
                    <p>{comic.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Comic;