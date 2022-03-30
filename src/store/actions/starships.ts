import { StarshipsService } from '../../service/starships';
import { AppDispatch } from '../../types/store';
import { setStarships } from '../ducks/starships';

export const handleStarships =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await StarshipsService.getStarships(page, search, id);
      return dispatch(setStarships(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
