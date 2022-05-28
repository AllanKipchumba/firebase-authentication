import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase-config";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // sign up
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // sign in
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    //check whether user is logged in or not
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={{ createUser, user, logout, signInUser }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
