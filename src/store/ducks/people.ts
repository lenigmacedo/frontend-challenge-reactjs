import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPeople } from '../../types/api';
import { IResponsePeople } from '../../types/service';

const people = createSlice({
  name: 'people',
  initialState: {
    results: [] as IPeople[],
  } as IResponsePeople,
  reducers: {
    setPeople(state, action: PayloadAction<IResponsePeople>) {
      return {
        ...state,
        results: action.payload.results,
      };
    },
  },
});

export const { setPeople } = people.actions;
export default people.reducer;
