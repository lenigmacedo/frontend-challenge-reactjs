import { Action, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { store } from '../../store';
import {
  IFilms,
  IPeople,
  IPlanets,
  ISpecies,
  IStarships,
  IVehicles,
} from '../api';

export interface IReduxState {
  films: {
    results: IFilms[];
  };
  planets: {
    results: IPlanets[];
  };
  people: {
    results: IPeople[];
  };
  species: {
    results: ISpecies[];
  };
  starships: {
    results: IStarships[];
  };
  vehicles: {
    results: IVehicles[];
  };
  config: {
    sound: boolean;
  };
}

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, unknown, unknown, Action<string>>;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
