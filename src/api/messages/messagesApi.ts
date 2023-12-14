import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContactSchemaType } from '../../layout/homepage/contact/contact-form/ContactForm';
import { infoConstants } from '../../models/constants/info.constant';

type InitialPost = ContactSchemaType;
const MESSAGE_REDUCER_PATH = 'messagesApi';
const URL_SEND_FORM_MESSAGE = '/form-email';
interface SendMessageResponse {
  success: boolean;
  message: string;
}

export const messagesApi = createApi({
  reducerPath: MESSAGE_REDUCER_PATH,

  baseQuery: fetchBaseQuery({
    baseUrl: infoConstants.API_BASE_URL,
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

export const messageReducer = messagesApi.reducer;
export const { useSendMessageFromContactMutation } = messagesApi;
