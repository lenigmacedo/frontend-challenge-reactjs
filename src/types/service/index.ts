import {
  IFilms,
  IPeople,
  IPlanets,
  ISpecies,
  IStarships,
  IVehicles,
} from '../api';

export interface IResponse {
  count?: number;
  next?: string;
  previous?: string;
}

export interface IResponsePlanets extends IResponse {
  results: IPlanets[] | IResponsePlanets[];
}

export interface IResponseFilms extends IResponse {
  results: IFilms[] | IResponseFilms[];
}

export interface IResponsePeople extends IResponse {
  results: IPeople[] | IResponseFilms[];
}

export interface IResponseVehicles extends IResponse {
  results: IVehicles[] | IResponseFilms[];
}

export interface IResponseSpecies extends IResponse {
  results: ISpecies[] | IResponseFilms[];
}

export interface IResponseStartships extends IResponse {
  results: IStarships[] | IResponseFilms[];
}
