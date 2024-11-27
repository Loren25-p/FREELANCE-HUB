import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import {
  MainContainer,
  HeroSection,
  FreelancerCard,
  CardButton,
  SearchInput,
  CardGrid,
  SearchContainer,
  SearchIcon,
  SearchButton,
  ProfileContainer,
  ProfileDetails,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
  SubmitButton,
  InputField,
} from './MainPage.styled';
import axios from 'axios';

interface Freelancer {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
  specialty: string;
  description: string;
}

const professions = [
  'Web Developer',
  'Graphic Designer',
  'Content Writer',
  'SEO Specialist',
  'Digital Marketer',
  'Mobile App Developer',
  'UX/UI Designer',
  'Data Analyst',
  'Project Manager',
  'Photographer',
];

const MainPage: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFreelancer, setSelectedFreelancer] = useState<Freelancer | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({ name: '', city: '', description: '', specialty: '' });
  const [shouldShowFreelancers, setShouldShowFreelancers] = useState(false);
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const [localFreelancers, setLocalFreelancers] = useState<Freelancer[]>([]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Fetch freelancers from GitHub API
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get('https://api.github.com/users?per_page=50');
        const data = response.data.map((user: any, index: number) => ({
          ...user,
          specialty: professions[index % professions.length], // Назначаем случайную профессию из списка
          description: 'Опытный специалист в своей области с отличным портфолио и отзывами.',
        }));
        setFreelancers(data);
      } catch (error) {
        console.error('Ошибка при получении данных фрилансеров:', error);
      }
    };

    if (shouldShowFreelancers) {
      fetchFreelancers();
    }
  }, [shouldShowFreelancers]);

  // Загружаем сохраненные посты из localStorage
  useEffect(() => {
    const savedFreelancers = localStorage.getItem('localFreelancers');
    if (savedFreelancers) {
      setLocalFreelancers(JSON.parse(savedFreelancers));
    }
  }, []);

  // Сохраняем локальные посты в localStorage
  useEffect(() => {
    localStorage.setItem('localFreelancers', JSON.stringify(localFreelancers));
  }, [localFreelancers]);

  const filteredFreelancers = [...freelancers, ...localFreelancers].filter((freelancer) =>
    freelancer.login?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setShouldShowFreelancers(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setShouldShowFreelancers(true);
    }
  };

  const handleViewProfile = (freelancer: Freelancer) => {
    setSelectedFreelancer(freelancer);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitPost = () => {
    const newFreelancer = {
      id: localFreelancers.length + freelancers.length + 1,
      login: newPost.name,
      avatar_url: `https://picsum.photos/seed/${localFreelancers.length + 1}/200/200`,
      html_url: '#',
      specialty: newPost.specialty,
      description: newPost.description,
    };
    setLocalFreelancers((prev) => [...prev, newFreelancer]);
    alert('Новый пост успешно добавлен');
    setIsModalOpen(false);
    setNewPost({ name: '', city: '', description: '', specialty: '' });
  };

  return (
    <MainContainer>
      <HeroSection>
        <h1>Найдите лучших фрилансеров для вашего проекта</h1>
        <p>Просматривайте профили, отзывы и предложения, чтобы найти идеального фрилансера для вашей задачи.</p>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Поиск фрилансеров..."
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
          <SearchButton onClick={handleSearchButtonClick}>
            <SearchIcon />
          </SearchButton>
        </SearchContainer>
        <CardButton onClick={handleOpenModal}>Добавить новый пост</CardButton>
      </HeroSection>
      {selectedFreelancer ? (
        <ProfileContainer>
          <ProfileDetails>
            <img src={selectedFreelancer.avatar_url} alt="avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
            <h2>{selectedFreelancer.login}</h2>
            <p>Специальность: {selectedFreelancer.specialty}</p>
            <p>Описание: {selectedFreelancer.description}</p>
            <p>Ссылка на профиль: <a href={selectedFreelancer.html_url} target="_blank" rel="noopener noreferrer">Перейти на GitHub</a></p>
            <CardButton onClick={() => setSelectedFreelancer(null)}>Вернуться к списку</CardButton>
          </ProfileDetails>
        </ProfileContainer>
      ) : (
        shouldShowFreelancers && (
          <CardGrid>
            {filteredFreelancers.length > 0 ? (
              filteredFreelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id}>
                  <img src={freelancer.avatar_url} alt="avatar" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />
                  <h2>{freelancer.login}</h2>
                  <p>Специальность: {freelancer.specialty}</p>
                  <CardButton onClick={() => handleViewProfile(freelancer)}>Просмотреть профиль</CardButton>
                </FreelancerCard>
              ))
            ) : (
              <p>Фрилансеры не найдены. Попробуйте изменить запрос для поиска.</p>
            )}
          </CardGrid>
        )
      )}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>
              <h2>Добавить новый пост</h2>
              <CloseButton onClick={handleCloseModal}>x</CloseButton>
            </ModalHeader>
            <ModalBody>
              <InputField type="text" name="name" placeholder="Имя" value={newPost.name} onChange={handleInputChange} />
              <InputField type="text" name="city" placeholder="Город" value={newPost.city} onChange={handleInputChange} />
              <InputField type="text" name="specialty" placeholder="Специальность" value={newPost.specialty} onChange={handleInputChange} />
              <InputField type="text" name="description" placeholder="Описание" value={newPost.description} onChange={handleInputChange} />
            </ModalBody>
            <ModalFooter>
              <SubmitButton onClick={handleSubmitPost}>Добавить</SubmitButton>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      )}
    </MainContainer>
  );
};

export default MainPage;
