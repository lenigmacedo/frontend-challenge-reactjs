import { IResponseVehicles } from '../types/service';
import api from './api';

export const VehiclesService = {
  getVehicles: async (page?: number, search?: string, id?: string | null) => {
    const url = id ? `/vehicles/${id}` : '/vehicles';
    const res = await api.get<IResponseVehicles>(url, {
      params: {
        search,
        page,
      },
    });

    if (!Array.isArray(res.data.results)) {
      return {
        results: [res.data],
      } as IResponseVehicles;
    }

    return res.data;
  },
};
