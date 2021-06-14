import  React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import { CharacterContextProvider } from './contexts/CharacterContext';
import { RandomCharacterContextProvider } from './contexts/RandomCharacterContext';

function App() {

   return (    
      <CharacterContextProvider> 
         <div className="App">
            <Router>
               <Switch>
                   <RandomCharacterContextProvider>
                     <Route exact path="/" component={Home}/>
                  </RandomCharacterContextProvider>

      {/*  {isLoadingCharacter ? <div>Loading...</div> : <ListRandomCharacter randomCharacter = {randomCharacter}/>} */}
      {/* </div>{isLoading ? <div>Loading...</div> : <ListCards characters = {characters}/>}   */}
               </Switch>
            </Router>
         </div>
      </CharacterContextProvider>
  );
}

export default App;
