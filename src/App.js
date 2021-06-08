import  React,{useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character/Character'
import Navbar from './components/Navbar/Navbar';

function App() {

  const [character, setCharacter] = useState([]);
 
  useEffect(() => {
       const offset = Math.floor(Math.random() * 1493);
       const getCharacters = async (offset) => {
          const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=1&offset=${offset}&ts=1&apikey=e0b9a1aef53742cc955deb022e25767b&hash=11e78a321dac6fe1b0158f5cf846ece7`);
          const json = await response.json();
          const characters = json.data.results; 
          setCharacter(characters);
       }
       getCharacters(offset);
  },[]);

   return (    
    <div className="App">
      <Navbar/>
       <div className="character-container"> 
       {character.map((element) => ( 
        <Character 
          name={element.name}
          image={`${element.thumbnail.path}.${element.thumbnail.extension}`}
          key={element.id}/>
        ))} 
      </div>
    </div>
  );
}

export default App;
