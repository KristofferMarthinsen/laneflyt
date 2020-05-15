
import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
  const [medlantaker, setMedlantaker] = useState(true);
  return (
    <AppContext.Provider value={{medlantaker, setMedlantaker}}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;

