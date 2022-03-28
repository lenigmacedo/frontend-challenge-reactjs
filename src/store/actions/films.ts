import { FilmsService } from '../../service/films';
import { AppDispatch } from '../../types/store';
import { setFilms } from '../ducks/films';

export const handleTest = () => async (dispatch: AppDispatch) => {
  try {
    const response = await FilmsService.getFilms();
    dispatch(setFilms(response));
    return response;
  } catch (err) {
    console.error('erro', err);
    return err;
  }
};
