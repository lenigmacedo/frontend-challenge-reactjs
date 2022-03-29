import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handlePlanets } from '../../store/actions/planets';
import { IPlanets } from '../../types/api';
import { IReduxState } from '../../types/store';
import { CardPlanets } from './commom/Card';
import * as S from './styled';

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
    const newPage = payload?.next?.substring(
      payload?.next?.lastIndexOf('=') + 1
    );
    const priorPage = payload?.previous?.substring(
      payload?.previous?.lastIndexOf('=') + 1
    );
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  const getId = (): string | null => {
    const searchParams = new URLSearchParams(location.search);
    const idSearch = searchParams.get('id');
    return idSearch;
  };
  useEffect(() => {
    getPlanets(false, false, getId());
  }, []);

  return (
    <Container
      onInputBlur={() => {
        if (!search) {
          getPlanets(false, false);
          return;
        }
        getPlanets();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <S.WrapperPages>
        {previousPage && (
          <p onClick={() => getPlanets(true)}>{'<'} Página anterior </p>
        )}
        {nextPage && (
          <p onClick={() => getPlanets(false, true)}>Próxima página {'>'}</p>
        )}
      </S.WrapperPages>

      <GridView>
        {planets.map((planet: IPlanets) => {
          return <CardPlanets planet={planet} />;
        })}
      </GridView>
    </Container>
  );
};
