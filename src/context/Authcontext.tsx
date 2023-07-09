import React from "react";
import { User } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { SignOutUser, userStateListener } from "../firebaseconfig/Firebase";
import { createContext, useState, useEffect, ReactNode } from "react";



interface Props {
  children?: ReactNode;
}

export const AuthContext = createContext({
  currentUser: {} as User | null,
 // eslint-disable-next-line @typescript-eslint/no-empty-function
  setCurrentUser: (_user: User) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  signOut: () => {}
});

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      if (user) {
        setCurrentUser(user);
      }
    });
    return unsubscribe;
  }, [setCurrentUser]);

  const signOut = () => {
    SignOutUser();
    setCurrentUser(null);
    navigate("/");
  };

  const value = {
    currentUser,
    setCurrentUser,
    signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
