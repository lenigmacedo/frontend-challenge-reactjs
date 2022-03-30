import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISpecies } from '../../types/api';
import { IResponseSpecies } from '../../types/service';

const species = createSlice({
  name: 'species',
  initialState: {
    results: [] as ISpecies[],
  } as IResponseSpecies,
  reducers: {
    setSpecies(state, action: PayloadAction<IResponseSpecies>) {
      return {
        ...state,
        results: action.payload.results,
      };
    },
  },
});

export const { setSpecies } = species.actions;
export default species.reducer;
