import { PeopleService } from '../../service/people';
import { AppDispatch } from '../../types/store';
import { setPeople } from '../ducks/people';

export const handlePeople =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await PeopleService.getPeople(page, search, id);
      return dispatch(setPeople(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
