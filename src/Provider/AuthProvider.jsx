import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
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

    useEffect(() => {

        const unSubscripe = onAuthStateChanged(auth, (currentuser) => {
       
            setUser(currentuser)
            setLoading(false)
        })

        return () => {
            unSubscripe()
        }

    }, [])

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