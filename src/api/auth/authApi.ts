import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../models/constants.app';
import { RegisterSchemaType } from '../../layout/register/register-form/RegisterForm';

const REDUCER_PATH = 'authApi';
const URL_AUTH = '/auth';
const URL_REGISTER_USER = '/register';

type InitialPost = RegisterSchemaType;

interface RegisterResponse {
  success: boolean;
  message: string;
}

export const authApi = createApi({
  reducerPath: REDUCER_PATH,

  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (builder) => ({
    registerUser: builder.mutation<RegisterResponse, InitialPost>({
      query: (initialPost) => ({
        url: URL_AUTH + URL_REGISTER_USER,
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
});

export const authReducer = authApi.reducer;
export const { useRegisterUserMutation } = authApi;
