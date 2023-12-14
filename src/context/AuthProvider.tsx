import { FC, createContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthContextType, User } from '../models/types/auth';
import { useGetMeQuery, useLogoutUserMutation } from '../api/auth/authApi';

interface Props {
  children: React.ReactNode;
}

const initialValue: AuthContextType = {
  isAdmin: false,
  setIsAdmin: () => false,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  userData: null,
  setUserData: () => {},
};

export const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider: FC<Props> = ({ children }) => {
  const cookies = useMemo(() => new Cookies(), []);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    Boolean(cookies.get('is_logged_in'))
  );
  const { data: userDataFromApi, isSuccess: getMeSuccess } = useGetMeQuery();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);
  const [logoutUser] = useLogoutUserMutation();

  useEffect(() => {
    if (isLoggedIn && getMeSuccess && userDataFromApi) {
      setIsAdmin(userDataFromApi.role === 'admin');
      setUserData(userDataFromApi);
      setIsAuthenticated(true);
    }
  }, [isLoggedIn, getMeSuccess, userDataFromApi]);

  const login = async () => {
    setIsLoggedIn(true);
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Logout error:', error);
    }

    setIsLoggedIn(false);
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUserData(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        isAuthenticated,
        login,
        logout,
        userData,
        setUserData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
