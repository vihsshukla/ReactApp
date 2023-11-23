import { createContext, useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
export const Context=createContext(null);
export const AppContext=({children})=>{
    const [showAlert,setShowAlert]=useState(false);
    const [alert,setAlert]=useState({severity:'',displayText:''});
    const location=useLocation();
    useEffect(()=>{
        window.scrollTo(0,0);
    },[location]);

    return <Context.Provider value={{
        showAlert,
        setShowAlert,
        alert,
        setAlert
    }}>
        {children}
    </Context.Provider>;
}

export default AppContext;