import { PlanetsService } from '../../service/planets';
import { AppDispatch } from '../../types/store';
import { setPlanets } from '../ducks/planets';

export const handlePlanets = () => async (dispatch: AppDispatch) => {
  try {
    const response = await PlanetsService.getPlanets();
    dispatch(setPlanets(response));
    return response;
  } catch (err) {
    console.error('erro', err);
    return err;
  }
};
