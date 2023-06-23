import React from "react";
import { useContext } from "react";
// context creation
//provider
//consumer process is lengthy so removed instead of this we will use usecontext hook
const AppContext = React.createContext(); // context creation

//to create a provider function
const AppProvider = ({children})=>{
    return( <AppContext.Provider value={"Arun"} >
        {children}
        </AppContext.Provider>)

}

// custom hook creation
const useGlobalContext= ()=>{
    return useContext(AppContext)
}

export {AppContext, AppProvider ,useGlobalContext};
