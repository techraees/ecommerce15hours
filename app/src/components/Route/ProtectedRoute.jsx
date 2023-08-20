import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const isAdmin = false;
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <>
      {
        loading === false &&
          (isAuthenticated === false ? (
            <Navigate to="/login" />
          ) : isAdmin === true && user.role !== "admin" ? (
            <Navigate to="/login" replace />
          ) : (
            <Outlet />
          ))
        // <Route
        //   {...rest}
        //   element={
        //     isAuthenticated === false ? (
        //       <Navigate to="/login" replace />
        //     ) : isAdmin === true && user.role !== "admin" ? (
        //       <Navigate to="/login" replace />
        //     ) : (
        //       <>
        //         <Element />
        //       </>
        //     )
        //   }
        // />
      }
    </>
  );
};

export default ProtectedRoute;
