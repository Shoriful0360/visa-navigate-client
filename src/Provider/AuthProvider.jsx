import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const [loading,setLoading]=useState(true)
// create sing up
    const createSignUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // sign out
    const signOutUser=()=>{
        return signOut(auth)
    }

    const info={
        user,createSignUp,setUser,signOutUser
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