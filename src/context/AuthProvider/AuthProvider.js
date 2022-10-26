import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../../firebase/firebase.config'
import { useEffect } from 'react';
import { useState } from 'react';



export const AuthContext=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState();

    // Register with email and password
    const registerWithEmailAndPassword=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // Login with email and password
    const loginWithEmailAndPassword=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    //SignOUt/Logot
    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('Auth state Changed',currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo={
        user,
        registerWithEmailAndPassword,
        logOut,
        loginWithEmailAndPassword
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;