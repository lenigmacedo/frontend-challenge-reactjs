import { toast } from 'react-toastify';
import { PlanetsService } from '../../service/planets';
import { AppDispatch } from '../../types/store';
import { setPlanets } from '../ducks/planets';
import { toggleLoading } from './config';

export const handlePlanets =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await PlanetsService.getPlanets(page, search, id);
      dispatch(toggleLoading(false));

      return dispatch(setPlanets(response));
    } catch (err) {
      dispatch(toggleLoading(false));
      toast.error('Erro ao buscar dados da API');
      return err;
    }
  };
