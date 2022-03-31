import { toast } from 'react-toastify';
import { SpeciesService } from '../../service/species';
import { AppDispatch } from '../../types/store';
import { setSpecies } from '../ducks/species';
import { toggleLoading } from './config';

export const handleSpecies =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(toggleLoading(true));
      const response = await SpeciesService.getSpecies(page, search, id);
      dispatch(toggleLoading(false));
      return dispatch(setSpecies(response));
    } catch (err) {
      toast.error('Erro ao buscar dados da API');
      dispatch(toggleLoading(false));

      return err;
    }
  };
