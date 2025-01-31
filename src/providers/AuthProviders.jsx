import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { app } from '../firebase/firebase.config';
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProviders = ({children}) => {
     const axiosPublic = useAxiosPublic();
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const googleProvider  = new GoogleAuthProvider();
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
     }

     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     const googleSignIn = () => {
          setLoading(true);
          return signInWithPopup(auth, googleProvider)
     }

     const logOut = () => {
          setLoading(true)
          return signOut(auth);
     }

     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
          })
     }

     useEffect(()=> {
         const unsubscribe = onAuthStateChanged(auth, currentUser => {
               setUser(currentUser);
               if(currentUser){
                    //get token and store in client
                    const userInfo = { email: currentUser.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                         if(res.data.token){
                              localStorage.setItem('access-token', res.data.token);
                              setLoading(false)
                         }
                    })
               }
               else{
                    localStorage.removeItem('access-token');
                    setLoading(false)
               }
               
          });
          return () => {
               return unsubscribe();
          }
     }, [axiosPublic])
     const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          googleSignIn,
          logOut,
          updateUserProfile
     }
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

AuthProviders.propTypes = {
     
};

export default AuthProviders;