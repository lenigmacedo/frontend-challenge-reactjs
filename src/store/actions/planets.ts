import { PlanetsService } from '../../service/planets';
import { AppDispatch } from '../../types/store';
import { setPlanets } from '../ducks/planets';

export const handlePlanets =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await PlanetsService.getPlanets(page, search, id);
      return dispatch(setPlanets(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
