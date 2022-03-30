import { IResponsePeople } from '../types/service';
import api from './api';

export const PeopleService = {
  getPeople: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/people/${id}` : '/people';
    const res = await api.get<IResponsePeople>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponsePeople;
    }

    return res.data;
  },
};
