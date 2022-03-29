import { IResponsePlanets } from '../types/service';
import api from './api';

export const PlanetsService = {
  getPlanets: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/planets/${id}` : '/planets';
    const res = await api.get<IResponsePlanets>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponsePlanets;
    }

    return res.data;
  },
};
