import { configureStore } from '@reduxjs/toolkit';
import { messagesApi } from '../api/messages/messagesApi';
import { authApi } from '../api/auth/authApi';

export const store = configureStore({
  reducer: {
    [messagesApi.reducerPath]: messagesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(messagesApi.middleware)
      .concat(authApi.middleware);
  },
});

export default store;
