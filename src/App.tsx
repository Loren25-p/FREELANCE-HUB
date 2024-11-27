import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import CardPage from './pages/CardPage/CardPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import GlobalStyle from './styles/GlobalStyle/GlobalStyle';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <div className="space"></div> 
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/register" />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/card/:id" element={<CardPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
