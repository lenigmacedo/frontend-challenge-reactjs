import { Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import { IFilms, IPlanets } from '../api';

export interface IReduxState {
  films: {
    results: IFilms[];
  };
  planets: {
    results: IPlanets[];
  };
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, unknown, unknown, Action<string>>;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
