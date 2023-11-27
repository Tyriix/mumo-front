import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../models/constants.app';
import { ContactSchemaType } from '../../layout/homepage/contact/contact-form/ContactForm';

const REDUCER_PATH = 'messagesApi';
const URL_SEND_FORM_MESSAGE = '/form-email';

type InitialPost = ContactSchemaType;

interface SendMessageResponse {
  success: boolean;
  message: string;
}

export const messagesApi = createApi({
  reducerPath: REDUCER_PATH,

  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),

  endpoints: (builder) => ({
    sendMessageFromContact: builder.mutation<SendMessageResponse, InitialPost>({
      query: (initialPost) => ({
        url: URL_SEND_FORM_MESSAGE,
        method: 'POST',
        body: initialPost,
      }),
    }),
  }),
});

export const { useSendMessageFromContactMutation } = messagesApi;
