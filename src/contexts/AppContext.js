import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [appData, setAppData] = useState({
   totalReciepts: 0,
    totalTips: 0,
    username: 'Current user',
  });

  const updateAppData = (newAppData) => {
    setAppData(newAppData);
  };

  return (
    <AppContext.Provider value={{ appData, updateAppData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
