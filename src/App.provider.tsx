import React, { createContext, FC, useContext } from 'react';

type AppContextType = {
  greeting: string;
};

const AppContext = createContext<AppContextType>({
  greeting: 'hello',
});

export const AppProvider: FC = ({ children }) => {
  return (
    <AppContext.Provider value={{ greeting: 'Ciao' }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
