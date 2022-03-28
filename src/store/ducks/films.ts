import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilms } from '../../types/api';

const films = createSlice({
  name: 'films',
  initialState: {
    results: [] as IFilms[],
  },
  reducers: {
    setFilms(state, action: PayloadAction<IFilms[]>) {
      return {
        ...state,
        results: action.payload,
      };
    },
  },
});

export const { setFilms } = films.actions;
export default films.reducer;
