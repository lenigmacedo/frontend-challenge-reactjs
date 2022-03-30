import { IResponseFilms } from '../types/service';
import api from './api';

export const FilmsService = {
  getFilms: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/films/${id}` : '/films';
    const res = await api.get<IResponseFilms>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponseFilms;
    }

    return res.data;
  },
};
