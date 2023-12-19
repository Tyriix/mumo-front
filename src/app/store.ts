import { configureStore } from '@reduxjs/toolkit';
import { messageReducer, messagesApi } from '../api/messages/messages.api';
import { combineReducers } from 'redux';
import { authApi } from '../api/auth/auth.api';
import { trainingsApi } from '../api/trainings/trainings.api';

const rootReducer = combineReducers({
  message: messageReducer,
  [messagesApi.reducerPath]: messagesApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [trainingsApi.reducerPath]: trainingsApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(messagesApi.middleware)
        .concat(authApi.middleware)
        .concat(trainingsApi.middleware),
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
