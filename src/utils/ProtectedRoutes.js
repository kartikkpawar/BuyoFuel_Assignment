import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("authState");

  if (!isAuth) {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default ProtectedRoute;
