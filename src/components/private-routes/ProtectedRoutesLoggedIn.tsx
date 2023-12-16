import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FC, useContext } from 'react';

const ProtectedRoutesLoggedIn: FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);

  if (isAuthenticated === undefined) {
    return null;
  }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/login' replace state={{ from: location }} />
  );
};

export default ProtectedRoutesLoggedIn;
