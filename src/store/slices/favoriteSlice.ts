import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  items: string[];
}

const initialState: FavoriteState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<string>) {
      state.items.push(action.payload);
    },
    removeFromFavorites(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
