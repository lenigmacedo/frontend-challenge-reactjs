import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handlePeople } from '../../store/actions/people';
import { IPeople } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardPeople } from './commom';

export const PeoplePage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const people = useSelector((state: IReduxState) => state.people.results);

  const getPeople = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handlePeople(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getPeople(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getPeople(true, true);
      }}
      onNextPage={() => getPeople(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getPeople(false, false);
          return;
        }
        getPeople();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {people.map((peopleObj: IPeople) => {
          return <CardPeople people={peopleObj} />;
        })}
      </GridView>
    </Container>
  );
};
