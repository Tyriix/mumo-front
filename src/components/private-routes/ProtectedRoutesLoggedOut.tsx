import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { FC, useContext, useEffect, useState } from 'react';

const ProtectedRoutesLoggedIn: FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthenticationStatus = async () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    checkAuthenticationStatus();
  }, []);

  if (isLoading) {
    return null;
  }

  return !isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location }} />
  );
};

export default ProtectedRoutesLoggedIn;
