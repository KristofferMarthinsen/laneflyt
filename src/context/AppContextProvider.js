import React, { useContext, createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [medlantaker, setMedlantaker] = useState(true);
  const [current, setCurrent] = useState(true);

  return (
    <AppContext.Provider
      value={{ medlantaker, setMedlantaker, current, setCurrent }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

export default AppContextProvider;
