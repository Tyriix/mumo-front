import { Role } from '../enums/enums.app';

export type User = {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  address?: string;
  city?: string;
  role: Role;
};

export type AuthContextType = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  userData: User | null;
  setUserData: (userData: User | null) => void;
};
