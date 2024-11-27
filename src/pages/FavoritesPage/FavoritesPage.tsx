import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeFromFavorites } from '../../store/slices/favoriteSlice';

const FavoritesPage: React.FC = () => {
  const favoriteItems = useSelector((state: RootState) => state.favorites.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Favorites Page</h2>
      <ul>
        {favoriteItems.map((item: string, index: number) => (
          <li key={index}>
            {item}
            <button onClick={() => dispatch(removeFromFavorites(item))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage; 