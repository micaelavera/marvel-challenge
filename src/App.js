import  React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ListCards from './components/Card/ListCards'
//import ListRandomCharacter from './components/RandomCharacter/ListRandomCharacter';
import useCharacters from "./hooks/useCharacters";
import Home from './pages/Home';
import { CharacterContextProvider } from './contexts/CharacterContext';

//import useRandomCharacter from './hooks/useRandomCharacter';

function App() {

// const [randomCharacter, isLoadingCharacter] = useRandomCharacter();
   //const [characters, isLoading] = useCharacters();
    
   return (    
      <CharacterContextProvider> 

         <div className="App">
               <Router>
                  <Switch>
          <Route exact path="/" component={Home}/>
      {/*  {isLoadingCharacter ? <div>Loading...</div> : <ListRandomCharacter randomCharacter = {randomCharacter}/>} */}
      {/* </div>{isLoading ? <div>Loading...</div> : <ListCards characters = {characters}/>}   */}
        </Switch>
       </Router>
         </div>
         </CharacterContextProvider>

  );
}

export default App;
