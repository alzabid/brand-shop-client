import { useContext } from "react";

import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-[80vh] flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>;
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
