import { FilmsService } from '../../service/films';
import { AppDispatch } from '../../types/store';
import { setFilms } from '../ducks/films';

export const handleFilms =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await FilmsService.getFilms(page, search, id);
      return dispatch(setFilms(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
