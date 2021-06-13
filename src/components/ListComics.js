import React from 'react';
import Comic from './Comic';

const ListComics = ({comic = []}) => {
    return(
        <div className="list-comics">
            {comic.map(comic => (
                <Comic
                    comic = {comic}
                    key = {comic.id}
                />
            ))}
        </div>
    );
}
export default ListComics;