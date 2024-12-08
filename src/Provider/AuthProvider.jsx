import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const authContext=createContext(null)
const AuthProvider = ({children}) => {
    const [visas,setVisas]=useState([]);
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

    // login with email and password
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // login with google
    const loginWithGoogle=()=>{
        const provider=new GoogleAuthProvider
        return signInWithPopup(auth,provider)
    }
    // forget password
    const forgotPassword=(email)=>{
        setLoading(true)
        
        return sendPasswordResetEmail(auth,email) 
    }

    // update user profile
    const updateUserProfile=(object)=>{
        setLoading(true)
        return updateProfile(auth.currentUser,object)

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
  
useEffect(()=>{
    fetch('https://visa-navigator-server-ten.vercel.app/allvisas')
    .then(res=>res.json())
    .then(data=>setVisas(data))
},[])

    const info={
        user,createSignUp,setUser,loading,setVisas,
        visas,signOutUser,signIn,loginWithGoogle,
        forgotPassword,updateUserProfile
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