import React from 'react';
import './Loading.css';

const Loading = ({name}) => {
    return (
        <div className="loading">
            <div className="spinner">
            </div>
            <h2>{name}</h2>
        </div>
    );
}

export default Loading;