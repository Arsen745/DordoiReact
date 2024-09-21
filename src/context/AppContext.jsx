import { createContext, useState } from 'react';

export const CONTEXT = createContext();

const AppContext = ({ children }) => {
    const [dataContext, setDataContext] = useState(null);
    const [clickData, setClick] = useState(false);
    const [searchData, setSearchData] = useState(null); 
    const [categoryClick, setCategoryClick] = useState(false)
    const [funcSaveCart, setFuncSaveCart] = useState()

    const context = {
        dataContext,
        setDataContext,
        searchData,
        setSearchData,
        clickData,
        setClick,
        setCategoryClick,
        categoryClick,
    

        
    };

    return (
        <CONTEXT.Provider value={context}>
            {children}
        </CONTEXT.Provider>
    );
};

export default AppContext;
