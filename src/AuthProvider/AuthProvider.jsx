
import axios from "axios";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../__firebase/firebase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const providerGoogle = new GoogleAuthProvider();
  const LoginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, providerGoogle);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser && currentUser.email) {
        axios.post("https://server-spoking-summer.vercel.app/jwt", { email: currentUser.email })
          .then((data) => {
            const token = data.data.token;
            localStorage.setItem("access-token", token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      return unsubscribe;
    };
  }, []);
  const authInfo = {
    LoginGoogle,
    createUser,
    loginUser,
    loading,
    logOut,
    user,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
