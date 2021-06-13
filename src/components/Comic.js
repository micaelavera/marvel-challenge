import React from 'react';

const Comic = ({element}) => {
    return (
        <div className="img-comic">
            <h1>{element.title}</h1>
        </div>
    );
}

export default Comic;