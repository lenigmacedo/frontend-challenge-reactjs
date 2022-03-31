import { toast } from 'react-toastify';
import { VehiclesService } from '../../service/vehicles';
import { AppDispatch } from '../../types/store';
import { setVehicles } from '../ducks/vehicles';
import { toggleLoading } from './config';

export const handleVehicles =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await VehiclesService.getVehicles(page, search, id);
      dispatch(toggleLoading(false));
      return dispatch(setVehicles(response));
    } catch (err) {
      toast.error('Erro ao buscar dados da API');
      dispatch(toggleLoading(false));

      return err;
    }
  };
