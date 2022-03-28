import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlanets } from '../../types/api';

const planets = createSlice({
  name: 'planets',
  initialState: {
    results: [] as IPlanets[],
  },
  reducers: {
    setPlanets(state, action: PayloadAction<IPlanets[]>) {
      return {
        ...state,
        results: action.payload,
      };
    },
  },
});

export const { setPlanets } = planets.actions;
export default planets.reducer;
