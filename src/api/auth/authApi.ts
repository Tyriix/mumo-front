import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../models/constants.app';
import { RegisterSchemaType } from '../../layout/register/register-form/RegisterForm';
import { LoginSchemaType } from '../../layout/login/login-form/LoginForm';
import { User } from '../../models/types/auth.types';

const REDUCER_PATH = 'authApi';
const URL_AUTH = '/auth';
const URL_REGISTER_USER = '/register';
const URL_LOGIN_USER = '/login';
const URL_GET_ME = '/me';
const URL_LOGOUT = '/logout';

type InitialRegisterPost = RegisterSchemaType;
type InitialLoginPost = LoginSchemaType;

interface RegisterResponse {
  success: boolean;
  message: string;
}
export interface LoginResponse {
  success: boolean;
  message: string;
}

export const authApi = createApi({
  reducerPath: REDUCER_PATH,

  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, InitialRegisterPost>({
      query: (initialPost) => ({
        url: URL_AUTH + URL_REGISTER_USER,
        method: 'POST',
        body: initialPost,
      }),
    }),
    loginUser: builder.mutation<LoginResponse, InitialLoginPost>({
      query: (initialLoginPost) => ({
        url: URL_AUTH + URL_LOGIN_USER,
        method: 'POST',
        body: initialLoginPost,
        credentials: 'include',
      }),
    }),
    logoutUser: builder.mutation<void, void>({
      query: () => ({
        url: URL_AUTH + URL_LOGOUT,
        method: 'POST',
        credentials: 'include',
      }),
    }),
    getMe: builder.query<User, void>({
      query: () => ({
        url: URL_AUTH + URL_GET_ME,
        method: 'GET',
        credentials: 'include',
      }),
    }),
  }),
});

export const authReducer = authApi.reducer;
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetMeQuery,
} = authApi;
