import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  h1 {
    font-size: 36px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    color: #666;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  position: relative;
`;

export const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SearchButton = styled.button`
  padding: 10px;
  margin-left: 10px;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const SearchIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" fill="%23ffffff" viewBox="0 0 24 24" stroke="currentColor"%3E%3Cpath stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 18a8 8 0 100-16 8 8 0 000 16zm9-2l5 5"%3E%3C/path%3E%3C/svg%3E');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const CardGrid = styled.div`
  color: gray;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FreelancerCard = styled.div`
  color: black;
  background-color: lavenderblush;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  max-height: 400px;
  margin: 20px;
  h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #666;
  }
  p {
    color: #888;
    margin-bottom: 15px;
  }
`;

export const CardButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  color: #666;
`;

export const ProfileDetails = styled.div`
  text-align: center;
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
    color: #666;
    margin-bottom: 10px;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: lightgrey;
  padding: 40px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  position: relative;
  background-image: url(public/img/logo1.webp);
  background-repeat: no-repeat;
  background-size: 110%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    margin: 0;
    color: black;
    margin-left: 120px;
    padding-bottom: 20px;
  }
`;

export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  color: red;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;



export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  `;
export const LoaderContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 200px;
font-size: 1.5rem;
`;

