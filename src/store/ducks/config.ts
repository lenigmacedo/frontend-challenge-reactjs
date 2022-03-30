import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const config = createSlice({
  name: 'config',
  initialState: {
    sound: false as boolean,
  },
  reducers: {
    setSound(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        sound: action.payload,
      };
    },
  },
});

export const { setSound } = config.actions;
export default config.reducer;
