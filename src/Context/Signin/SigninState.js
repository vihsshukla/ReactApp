import SigninContext from "./SigninContext";
import { useState } from "react";

export const SigninState=(props)=>{
    const [isSignedIn,setIsSignedIn]=useState(false);

    const updateSignedInValue=(status)=>{
        setIsSignedIn(status);
    }

    return (
        <SigninContext.Provider value={{isSignedIn,updateSignedInValue}}>
            {props.children}
        </SigninContext.Provider>
    );
}

export default SigninState;