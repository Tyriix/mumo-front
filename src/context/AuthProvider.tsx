import { FC, createContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'universal-cookie';
import { AuthContextType, User } from '../models/types/auth';
import { useGetMeQuery } from '../api/auth/authApi';

interface Props {
  children: React.ReactNode;
}

const initialValue: AuthContextType = {
  isAdmin: false,
  setIsAdmin: () => false,
  isAuthenticated: false,
  accessToken: null,
  login: () => {},
  logout: () => {},
  userData: null,
  setUserData: () => {},
  getAuthentication: () => false,
};

export const AuthContext = createContext<AuthContextType>(initialValue);

const AuthProvider: FC<Props> = ({ children }) => {
  const cookies = useMemo(() => new Cookies(), []);
  const [accessToken, setAccessToken] = useState<string | null>(
    cookies.get('access_tkn')
  );
  const { data: userDataFromApi, isSuccess: getMeSuccess } = useGetMeQuery();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const storedAccessToken = cookies.get('access_tkn');
    if (storedAccessToken) {
      setAccessToken(storedAccessToken);
    }
  }, [cookies]);

  const checkAuthentication = async () => {
    if (getMeSuccess && userDataFromApi) {
      setIsAdmin(userDataFromApi.role === 'admin');
      setUserData(userDataFromApi);
    }
  };

  const login = async (accessToken: string) => {
    setAccessToken(accessToken);
    setIsAuthenticated(true);
    checkAuthentication();
    console.log(accessToken);
  };

  const logout = () => {
    setAccessToken(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    setUserData(null);
    cookies.remove('access_tkn');
  };

  const getAuthentication = () => {
    return isAuthenticated;
  };

  return (
    <AuthContext.Provider
      value={{
        isAdmin,
        setIsAdmin,
        isAuthenticated,
        accessToken,
        login,
        logout,
        userData,
        setUserData,
        getAuthentication,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
