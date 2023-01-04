import React, { PropsWithChildren } from "react";


export const AppContext = React.createContext({});

const AppContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  return (
      <AppContext.Provider value={{count: 5, x: 10}}>{ children}</AppContext.Provider>
  )
}

export default AppContextProvider