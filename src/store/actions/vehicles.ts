import { VehiclesService } from '../../service/vehicles';
import { AppDispatch } from '../../types/store';
import { setVehicles } from '../ducks/vehicles';

export const handleVehicles =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await VehiclesService.getVehicles(page, search, id);
      return dispatch(setVehicles(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
