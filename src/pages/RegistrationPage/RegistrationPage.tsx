import React, { useState } from 'react';
import { Container, Input, Button } from './RegistrationPage.styled';
import { Link, useNavigate } from 'react-router-dom';

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (email && name && password) {
      localStorage.setItem('email', email);
      localStorage.setItem('name', name);
      localStorage.setItem('password', password);
      alert(`Регистрация через Email: ${email}, Имя: ${name}`);
      navigate('/login');
    } else {
      alert('Пожалуйста, введите данные в правильном формате');
    }
  };

  return (
    <Container>
      <h2>Регистрация</h2>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleRegister}>Зарегистрироваться</Button>
      <p>
        <Link to="/login">У вас уже есть учетная запись?</Link>
      </p>
    </Container>
  );
};

export default RegistrationPage;
