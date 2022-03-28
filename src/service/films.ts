import { IResponseFilms } from '../types/service';
import api from './api';

export const FilmsService = {
  getFilms: async () => {
    const res = await api.get<IResponseFilms>('/films');
    return res.data.results;
  },

  getFilmBySearch: async (search: string) => {
    const res = await api.get<IResponseFilms>('/films', {
      params: {
        search,
      },
    });
    return res.data;
  },
};
