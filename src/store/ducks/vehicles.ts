import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IVehicles } from '../../types/api';
import { IResponseVehicles } from '../../types/service';

const vehicles = createSlice({
  name: 'vehicles',
  initialState: {
    results: [] as IVehicles[],
  } as IResponseVehicles,
  reducers: {
    setVehicles(state, action: PayloadAction<IResponseVehicles>) {
      return {
        ...state,
        results: action.payload.results,
      };
    },
  },
});

export const { setVehicles } = vehicles.actions;
export default vehicles.reducer;
