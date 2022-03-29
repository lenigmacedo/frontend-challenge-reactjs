import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlanets } from '../../types/api';
import { IResponsePlanets } from '../../types/service';

const planets = createSlice({
  name: 'planets',
  initialState: {
    results: [] as IPlanets[],
  } as IResponsePlanets,
  reducers: {
    setPlanets(state, action: PayloadAction<IResponsePlanets>) {
      return {
        ...state,
        results: action.payload.results,
        next: action.payload.next,
      };
    },
  },
});

export const { setPlanets } = planets.actions;
export default planets.reducer;
