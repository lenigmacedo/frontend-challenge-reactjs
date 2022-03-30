import { toast } from 'react-toastify';
import { StarshipsService } from '../../service/starships';
import { AppDispatch } from '../../types/store';
import { setStarships } from '../ducks/starships';
import { toggleLoading } from './config';

export const handleStarships =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await StarshipsService.getStarships(page, search, id);
      dispatch(toggleLoading(false));
      return dispatch(setStarships(response));
    } catch (err) {
      toast.error('Erro ao buscar dados da API');

      return err;
    }
  };
