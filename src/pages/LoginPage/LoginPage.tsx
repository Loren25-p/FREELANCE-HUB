import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Input, Button } from './LoginPage.styled.ts';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      dispatch(login());
      navigate('/main');
    } else {
      alert('Пожалуйста, введите данные в правильном формате');
    }
  };

  return (
    <Container>
      <h2>Вход</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Войти</Button>
      <p>
        <Link to="/register">Зарегистрироваться</Link>
      </p>
    </Container>
  );
};

export default LoginPage;
