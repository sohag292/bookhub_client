import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut, signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail, GithubAuthProvider } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ( {children} ) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider(auth);
    const gihubProvider = new GithubAuthProvider(auth);

    const registerWithPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const PasswordResetEmail = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
        
      };


    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => { 
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gihubProvider);
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log("Logged in user inside auth statea observer", loggedUser)
        setUser(loggedUser);
        setLoading(false);
  
      })
      return () => {
        unsubscribe();
      }
    }, [])

    const authInfo = {
        user,
        loading,
        logIn,
        PasswordResetEmail,
        googleSignIn,
        githubSignIn,
        logOut,
        registerWithPass,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;