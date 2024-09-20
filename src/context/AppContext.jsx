import { createContext, useState } from 'react';

export const CONTEXT = createContext();

const AppContext = ({ children }) => {
    const [dataContext, setDataContext] = useState(null);
    const [clickData, setClick] = useState(false);
    const [searchData, setSearchData] = useState(null); 
    console.log(searchData, '---------context------------');
    

    const context = {
        dataContext,
        setDataContext,
        searchData,
        setSearchData,
        clickData,
        setClick
    };

    return (
        <CONTEXT.Provider value={context}>
            {children}
        </CONTEXT.Provider>
    );
};

export default AppContext;
