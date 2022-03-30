import { IResponseSpecies } from '../types/service';
import api from './api';

export const SpeciesService = {
  getSpecies: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/species/${id}` : '/species';
    const res = await api.get<IResponseSpecies>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponseSpecies;
    }

    return res.data;
  },
};
