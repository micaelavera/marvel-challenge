import React, { useState } from 'react';

const RandomCharacterContext = React.createContext({})

export function RandomCharacterContextProvider ({children}) {
  const [randomCharacter, setRandomCharacter] = useState([])
  
  return (
    <RandomCharacterContext.Provider value={{randomCharacter, setRandomCharacter}}>
        {children}
    </RandomCharacterContext.Provider>
  )
}

export default RandomCharacterContext;