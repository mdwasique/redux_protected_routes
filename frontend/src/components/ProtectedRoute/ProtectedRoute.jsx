import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
}) => {
  if (!isAuthenticated) return <Navigate to={redirect} />;

  if (adminOnly && !admin) return <Navigate to={redirect} />;

  return children ? children : <Outlet />;
};

ProtectedRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node,
  adminOnly: PropTypes.bool,
  admin: PropTypes.bool,
  redirect: PropTypes.string,
};

ProtectedRoute.defaultProps = {
  children: null,
  adminOnly: false,
  admin: false,
  redirect: "/",
};

export default ProtectedRoute;
