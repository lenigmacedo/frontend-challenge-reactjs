import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const config = createSlice({
  name: 'config',
  initialState: {
    sound: false as boolean,
    loading: false as boolean,
  },
  reducers: {
    setSound(state, action: PayloadAction<boolean>) {
      return {
        ...state,
        sound: action.payload,
      };
    },
    setLoading(state, action: PayloadAction<boolean>) {
      console.log(action.payload);

      return {
        ...state,
        loading: action.payload,
      };
    },
  },
});

export const { setSound, setLoading } = config.actions;
export default config.reducer;
