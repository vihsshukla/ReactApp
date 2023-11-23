import { createContext, useState } from "react";
export const AlertContext=createContext("");
export const AppContext=(props)=>{
    const [showAlert,setShowAlert]=useState(false);
    const [alert,setAlert]=useState(undefined);

    const addAlertDetails=(severity,displayText)=>{
        setAlert({severity,displayText});
    }

    const setAlertStatus=(status)=>{
        setShowAlert(status);
    }

    return (<AlertContext.Provider value={{
        showAlert,
        setAlertStatus,
        alert,
        addAlertDetails
    }} >{props.children}</AlertContext.Provider>);
}

export default AppContext;