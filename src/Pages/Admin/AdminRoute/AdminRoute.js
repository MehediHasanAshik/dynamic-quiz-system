import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, admin } = useAuth();
  const location = useLocation();

  if (user.email && admin) {
    return children;
  }

  return <Navigate to="/home" state={{ from: location }} />;
};

export default AdminRoute;
