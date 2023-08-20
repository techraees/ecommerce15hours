import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, loading } = useSelector((state) => state.user);
  if (loading === false) {
    isAuthenticated === false ? (
      <Navigate to="/login" replace />
    ) : isAdmin === true && user.role !== "admin" ? (
      <Navigate to="login" replace />
    ) : (
      children
    );
  }
};

export default ProtectedRoute;
