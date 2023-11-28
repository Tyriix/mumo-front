import { configureStore } from '@reduxjs/toolkit';
import { messageReducer, messagesApi } from '../features/messages/messagesApi';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  message: messageReducer,
  [messagesApi.reducerPath]: messagesApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(messagesApi.middleware),
  });
};

const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
