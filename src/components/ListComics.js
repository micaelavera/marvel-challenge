import React from 'react';
import Comic from './Comic';

const ListComics = ({comics = []}) => {
    return(
        <div className="list-comics">
            {comics.map(element => (
                <Comic
                    comic = {element}
                    key = {element.id}
                />
            ))}
        </div>
    );
}
export default ListComics;