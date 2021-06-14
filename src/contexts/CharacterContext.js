import React, { useState } from 'react';

const CharacterContext = React.createContext({})

export function CharacterContextProvider ({children}) {
  const [characters, setCharacters] = useState([])
  
  return (
    <CharacterContext.Provider value={{characters, setCharacters}}>
        {children}
    </CharacterContext.Provider>
  )
}

export default CharacterContext;