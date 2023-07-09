import React from "react"
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { Navigate, useLocation } from "react-router-dom";

function RequireAuth({ children }: { children:JSX.Element }) {
  const { currentUser } = useContext(AuthContext)
  const location = useLocation()

  if (!currentUser) {
 
    return <Navigate to="/" state={ { from: location } } replace />;
  }

  return children;
}

export default RequireAuth
