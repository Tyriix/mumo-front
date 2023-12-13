import { FC, createContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthContextType } from '../models/types/context/auth';
import { User } from '../models/types/api/user';

interface Props {
  children: React.ReactNode;
}

const initialValue: AuthContextType = {
  isAdmin: false,
  setIsAdmin: () => false,
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  login: () => {},
  logout: () => {},
  userData: null,
  setUserData: () => {},
  getAuthentication: () => false,
  authenticationErrorCount: 0,
};

export const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider: FC<Props> = ({ children }) => {
  const cookies = useMemo(() => new Cookies(), []); 
  const [accessToken, setAccessToken] = useState<string | null>(
    cookies.get('access_tkn')
  );
  const [refreshToken, setRefreshToken] = useState<string | null>(
    cookies.get('refresh_tkn')
  );
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedAccessToken = cookies.get('access_tkn');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, [cookies]);

  const checkAdminStatus = async () => {
    // Make an API call or perform checks to determine if the user is an admin
    // Example: const response = await someApiCallToCheckAdminStatus();
    // setIsAdmin(response.isAdmin);
  };

  useEffect(() => {
    checkAdminStatus();
  }, [accessToken]);

  const login = async (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setIsAuthenticated(true);
    checkAdminStatus(); // Check admin status after login
  };

  const logout = () => {
    setAccessToken(null);
    setRefreshToken(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUserData(null);
    cookies.remove('access_tkn');
    cookies.remove('refresh_tkn');
  };

  const getAuthentication = () => {
    // Implement your logic to check authentication status
    return isAuthenticated;
  };

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        isAuthenticated,
        accessToken,
        refreshToken,
        login,
        logout,
        userData,
        setUserData,
        getAuthentication,
        authenticationErrorCount: 0,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
