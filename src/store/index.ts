import { configureStore } from '@reduxjs/toolkit';
import { freelancersApi } from './Api/authApi';
import userReducer from './slices/authSlice'; // Исправленный импорт для userSlice

export const store = configureStore({
  reducer: {
    user: userReducer,
    [freelancersApi.reducerPath]: freelancersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(freelancersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
