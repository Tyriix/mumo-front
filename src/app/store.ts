import { configureStore } from '@reduxjs/toolkit';
import { messagesSlice } from '../features/messages/messagesSlice';

export const store = configureStore({
  reducer: {
    [messagesSlice.reducerPath]: messagesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(messagesSlice.middleware);
  },
});

export default store;
