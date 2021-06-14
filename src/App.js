import  React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import { CharacterContextProvider } from './contexts/CharacterContext';

function App() {

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
