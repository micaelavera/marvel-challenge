import React from 'react';
import Comic from './Comic';

const ListComics = ({comics = []}) => {
    
    return(
        <div className="list-comics">
            {comics.map(comic => (
                <Comic
                    comic = {comic}
                    key = {comic.id}
                />
            ))}
        </div>
    );
}
export default ListComics;