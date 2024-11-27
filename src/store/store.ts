// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice';
// import { authApi } from './Api/authApi';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer, // Добавляем редьюсер для авторизации
//     [authApi.reducerPath]: authApi.reducer, 
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware), 
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;


import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/authSlice';
import favoriteReducer from './slices/favoriteSlice'; 
import { freelancersApi } from './Api/authApi';

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoriteReducer,
    [freelancersApi.reducerPath]: freelancersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(freelancersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
