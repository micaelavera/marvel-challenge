import React, {useState} from 'react';
import Modal from '../Modal/Modal'
import './Card.css';

const Card = ({character}) => {

    const[modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return(
        <div className="card-container" onClick={() => toggleModal()}>
            <div className="favourites">
                <i className="far fa-star"></i>
            </div>
            <div className="img-character">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="character"/>
            </div>
            <div className="name-character">
                <h2>{character.name}</h2>
            </div>
            <Modal character={character} show={modal} close={toggleModal}/>
        </div>
    );
}

export default Card;