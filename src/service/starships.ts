import { IResponseStartships } from '../types/service';
import api from './api';

export const StarshipsService = {
  getStarships: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/starships/${id}` : '/starships';
    const res = await api.get<IResponseStartships>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponseStartships;
    }

    return res.data;
  },
};
