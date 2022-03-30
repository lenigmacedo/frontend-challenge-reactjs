import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handleSpecies } from '../../store/actions/species';
import { ISpecies } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardSpecies } from './commom';

export const SpeciesPage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const species = useSelector((state: IReduxState) => state.species.results);

  const getSpecies = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handleSpecies(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getSpecies(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getSpecies(true, true);
      }}
      onNextPage={() => getSpecies(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getSpecies(false, false);
          return;
        }
        getSpecies();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {species.map((specie: ISpecies) => {
          return <CardSpecies specie={specie} />;
        })}
      </GridView>
    </Container>
  );
};
