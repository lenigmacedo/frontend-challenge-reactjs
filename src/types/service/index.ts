import { IFilms, IPlanets } from '../api';

export interface IResponse {
  count: number;
  next?: string;
  previous?: string;
}

export interface IResponsePlanets extends IResponse {
  results: IPlanets[];
}

export interface IResponseFilms extends IResponse {
  results: IFilms[];
}
