import styled from 'styled-components';

export const Container = styled.div`
  background-color: gray;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  height: 275px;
  text-align: center;
  margin: 0 auto;
  margin-top: 150px;
  margin-left: 580px;
  background-image: url(public/img/logo1.webp);
  background-repeat: no-repeat;
  background-size: 110%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;

export const Input = styled.input`
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid black;
  border-radius: 6px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  border: none;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`;
