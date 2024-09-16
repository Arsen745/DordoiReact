import { createContext, useEffect, useState } from 'react';

export const CONTEXT = createContext();

const AppContext = ({ children }) => {
  const [dataContext, setDataContext] = useState(null);

  const context = {
    dataContext,
    setDataContext,

  };


  return (
    <CONTEXT.Provider value={context}>
      {children}
    </CONTEXT.Provider>
  );
};

export default AppContext;
