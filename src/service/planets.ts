import { IResponsePlanets } from '../types/service';
import api from './api';

export const PlanetsService = {
  getPlanets: async () => {
    const res = await api.get<IResponsePlanets>('/planets');
    return res.data.results;
  },

  getPlanetsBySearch: async (search: string) => {
    const res = await api.get<IResponsePlanets>('/planets', {
      params: {
        search,
      },
    });
    return res.data;
  },
};
