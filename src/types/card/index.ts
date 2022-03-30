import {
  IFilms,
  IPeople,
  IPlanets,
  ISpecies,
  IStarships,
  IVehicles,
} from '../api';

export interface ICardPlanets {
  planet: IPlanets;
}

export interface ICardFilms {
  film: IFilms;
}

export interface ICardPeople {
  people: IPeople;
}

export interface ICardVehicles {
  vehicle: IVehicles;
}

export interface ICardSpecies {
  specie: ISpecies;
}

export interface ICardStarships {
  starship: IStarships;
}
