import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFilms } from '../../types/api';
import { IResponseFilms } from '../../types/service';

const films = createSlice({
  name: 'films',
  initialState: {
    results: [] as IFilms[],
  } as IResponseFilms,
  reducers: {
    setFilms(state, action: PayloadAction<IResponseFilms>) {
      return {
        ...state,
        results: action.payload.results,
      };
    },
  },
});

export const { setFilms } = films.actions;
export default films.reducer;
