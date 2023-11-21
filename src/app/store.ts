import { configureStore } from '@reduxjs/toolkit';
import { messagesSlice } from '../features/messages/messagesSlice';
import { authSlice } from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    [messagesSlice.reducerPath]: messagesSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(messagesSlice.middleware)
      .concat(authSlice.middleware);
  },
});

export default store;
