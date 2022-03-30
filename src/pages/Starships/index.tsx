import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handleStarships } from '../../store/actions/starships';
import { IStarships } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardStarships } from './commom';

export const StarshipsPage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const starships = useSelector(
    (state: IReduxState) => state.starships.results
  );

  const getStarships = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handleStarships(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getStarships(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getStarships(true, true);
      }}
      onNextPage={() => getStarships(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getStarships(false, false);
          return;
        }
        getStarships();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {starships.map((starship: IStarships) => {
          return <CardStarships starship={starship} />;
        })}
      </GridView>
    </Container>
  );
};
