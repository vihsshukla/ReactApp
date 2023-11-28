import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthState=(props)=>{
    const [isAuthenticated,setIsAuthenticated]=useState(false);

    const updateAuthentication=(status)=>{
        setIsAuthenticated(status);
    };

    return (
        <AuthContext.Provider value={{isAuthenticated,updateAuthentication}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthState;