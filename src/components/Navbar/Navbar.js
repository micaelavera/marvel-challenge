import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/logo-marvel.png';

const Navbar = () => {

    const [input, setInput] = useState('');
    const history = useHistory();

    const handleChange = (event) =>{
        setInput(event.target.value);
        console.log(event.target.value);
   }

   const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/${input}`)
        console.log(input);
    }

    return (
        <form className="search" onSubmit={handleSubmit}>
            <div className="navbar navbar-light bg-light">
                <div className="navbar-brand">
                    <img src={logo} alt="logo"/>
                </div>
                <input type="text" onChange={handleChange} value={input} className="input-search form-control fas" placeholder="&#xf002; Search"/> 
                <i className="favourite far fa-star"></i>
            </div>
        </form>
    );
}

export default Navbar;