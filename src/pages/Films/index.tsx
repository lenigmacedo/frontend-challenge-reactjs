import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handleFilms } from '../../store/actions/films';
import { IFilms } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardFilm } from './commom';

export const FilmsPage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const films = useSelector((state: IReduxState) => state.films.results);

  const getFilms = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handleFilms(page, search, id));
    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getFilms(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getFilms(true, true);
      }}
      onNextPage={() => getFilms(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getFilms(false, false);
          return;
        }
        getFilms();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {films.map((film: IFilms) => {
          return <CardFilm film={film} />;
        })}
      </GridView>
    </Container>
  );
};
