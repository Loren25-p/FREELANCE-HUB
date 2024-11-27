import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/slices/favoriteSlice';


const FreelancerCard = ({ freelancer }: { freelancer: any }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(freelancer.name));
  };

  return (
    <div>
      <h3>{freelancer.name}</h3>
      <button onClick={handleAddToFavorites}>Добавить в избранное</button>
    </div>
  );
};

export default FreelancerCard;
