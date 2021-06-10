import  React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ListCards from './components/Card/ListCards'
//import ListRandomCharacter from './components/Character/ListRandomCharacter';
import useCharacters from "./hooks/useCharacters";
//import useRandomCharacter from './hooks/useRandomCharacter';

function App() {

//const [randomCharacter, isLoadingCharacter] = useRandomCharacter();
  const [characters, isLoading] = useCharacters();
    
   return (    
    <div className="App">
      <Navbar/>
      {/* {isLoadingCharacter ? <div>Loading...</div> : <ListRandomCharacter randomCharacter = {randomCharacter}/>}  */}
       {isLoading ? <div>Loading...</div> : <ListCards characters = {characters}/>}
    </div>
  );
}

export default App;
