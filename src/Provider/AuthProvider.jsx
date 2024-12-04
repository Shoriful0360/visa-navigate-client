import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()

    const createSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const info={
        user,createSignUp,setUser
    }
    return (
        <div>
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
        </div>
    );
};

export default AuthProvider;