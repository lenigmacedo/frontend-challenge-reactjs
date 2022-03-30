import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handlePlanets } from '../../store/actions/planets';
import { IPlanets } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardPlanets } from './commom';

export const Home: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const planets = useSelector((state: IReduxState) => state.planets.results);

  const getPlanets = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handlePlanets(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getPlanets(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getPlanets(true, true);
      }}
      onNextPage={() => getPlanets(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getPlanets(false, false);
          return;
        }
        getPlanets();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {planets.map((planet: IPlanets) => {
          return <CardPlanets planet={planet} />;
        })}
      </GridView>
    </Container>
  );
};
