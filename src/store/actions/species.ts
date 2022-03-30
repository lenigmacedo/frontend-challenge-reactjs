import { SpeciesService } from '../../service/species';
import { AppDispatch } from '../../types/store';
import { setSpecies } from '../ducks/species';

export const handleSpecies =
  (page?: number, search?: string, id?: string | null) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await SpeciesService.getSpecies(page, search, id);
      return dispatch(setSpecies(response));
    } catch (err) {
      console.error('erro', err);
      return err;
    }
  };
