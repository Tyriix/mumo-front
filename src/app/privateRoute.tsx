import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";

const ProtectedRoutes = () => {
    const location = useLocation();
      const { isAuthenticated, isAdmin, logout } = useContext(AuthContext);

  
    if (isAuthenticated === undefined) {
      return null;
    }
  
    return isAuthenticated 
      ? <Outlet />
      : <Navigate to="/login" replace state={{ from: location }} />;
  }

export default ProtectedRoutes