import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStarships } from '../../types/api';
import { IResponseStartships } from '../../types/service';

const starships = createSlice({
  name: 'starships',
  initialState: {
    results: [] as IStarships[],
  } as IResponseStartships,
  reducers: {
    setStarships(state, action: PayloadAction<IResponseStartships>) {
      return {
        ...state,
        results: action.payload.results,
      };
    },
  },
});

export const { setStarships } = starships.actions;
export default starships.reducer;
