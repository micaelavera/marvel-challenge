import  React,{useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home';
import ListCards from './components/Card/ListCards';

function App() {

  const baseURL = `https://gateway.marvel.com:443/v1/public/`;
  const publicKey = `e0b9a1aef53742cc955deb022e25767b`;
  const hash = `11e78a321dac6fe1b0158f5cf846ece7`;

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`${baseURL}/characters?ts=1&apikey=${publicKey}&hash=${hash}`)
    .then(response => response.json())
    .then(json => {
        setCharacters(json.data.results)
      })
    }, []);

   return (    
    <div className="App">
      <Home/>
      <ListCards characters = {characters}/>
      {/* {characters.map(element => (
        <Card 
        name={element.name}
        image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
        key={element.id}
        />
      )
      )
      } */}
    </div>
  );
}

export default App;
