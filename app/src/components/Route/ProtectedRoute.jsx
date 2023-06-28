import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, element: Element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          element={
            isAuthenticated === false ? (
              <Navigate to="/login" replace />
            ) : isAdmin === true && user.role !== "admin" ? (
              <Navigate to="/login" replace />
            ) : (
              <Element />
            )
          }
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
