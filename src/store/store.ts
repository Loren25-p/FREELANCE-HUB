// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './slices/authSlice'; // Импорт authSlice
// import { authApi } from './Api/authApi'; // Импорт authApi из RTK Query

// export const store = configureStore({
//   reducer: {
//     auth: authReducer, // Добавляем редьюсер для авторизации
//     [authApi.reducerPath]: authApi.reducer, // Добавляем редьюсер RTK Query
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(authApi.middleware), // Добавляем middleware RTK Query
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
