import {
  messageReducer,
  messagesSlice,
} from '../features/messages/messagesSlice';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  message: messageReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = configureStore({
  reducer: {
    [messagesSlice.reducerPath]: messagesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(messagesSlice.middleware);
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export default store;
