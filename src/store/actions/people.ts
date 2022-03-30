import { toast } from 'react-toastify';
import { PeopleService } from '../../service/people';
import { AppDispatch } from '../../types/store';
import { setPeople } from '../ducks/people';
import { toggleLoading } from './config';

export const handlePeople =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await PeopleService.getPeople(page, search, id);
      dispatch(toggleLoading(false));
      return dispatch(setPeople(response));
    } catch (err) {
      toast.error('Erro ao buscar dados da API');

      return err;
    }
  };
