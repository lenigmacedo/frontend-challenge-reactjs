import { toast } from 'react-toastify';
import { FilmsService } from '../../service/films';
import { AppDispatch } from '../../types/store';
import { setFilms } from '../ducks/films';
import { toggleLoading } from './config';

export const handleFilms =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await FilmsService.getFilms(page, search, id);
      dispatch(toggleLoading(false));
      return dispatch(setFilms(response));
    } catch (err) {
      toast.error('Erro ao buscar dados da API');
      return err;
    }
  };
