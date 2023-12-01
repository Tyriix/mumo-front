import { configureStore } from '@reduxjs/toolkit';
import { messageReducer, messagesApi } from '../api/messages/messagesApi';
import { combineReducers } from 'redux';
import { authApi } from '../api/auth/authApi';

const rootReducer = combineReducers({
  message: messageReducer,
  [messagesApi.reducerPath]: messagesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(messagesApi.middleware).concat(authApi.middleware),
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
