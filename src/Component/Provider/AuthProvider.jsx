/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const createUser = (email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }

   const signIn = (email,password)=> {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   }

   const logOut = () => {
    signOut(auth)
}

const userUpdate = (name,photo) => {
    return updateProfile(auth.currentUser,{
        displayName : name,
        photoURL : photo
        
    })

    .then(() => {
        // Profile updated!
        // ...
      }).catch((error) => {
        // An error occurred
        // ...
      });


   }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,loggedUser => {
           setUser(loggedUser)
           setLoading(false)

       })

       return ()=> {
           unsubscribe()
       }

   },[])

   const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    userUpdate,
    loading
   }


    return (
        <AuthContext.Provider value={authInfo} >
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;