import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handleVehicles } from '../../store/actions/vehicles';
import { IVehicles } from '../../types/api';
import { IReduxState } from '../../types/store';
import { getId, getPageNumber } from '../../utils/functions';
import { CardVehicles } from './commom';

export const VehiclesPage: React.FC = () => {
  const [nextPage, setNextPage] = useState<number>();
  const [previousPage, setPreviousPage] = useState<number>();
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();
  const location = useLocation();
  const vehicles = useSelector((state: IReduxState) => state.vehicles.results);

  const getVehicles = async (
    isPrevious?: boolean,
    canGoNext?: boolean,
    id?: string | null
  ): Promise<void> => {
    let page = isPrevious ? previousPage : nextPage;

    if ((search && !canGoNext) || (!search && !canGoNext)) {
      page = 1;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { payload }: any = await dispatch(handleVehicles(page, search, id));

    const newPage = getPageNumber(payload.next);
    const priorPage = getPageNumber(payload.previous);
    setNextPage(newPage);
    setPreviousPage(priorPage);
  };

  useEffect(() => {
    getVehicles(false, false, getId(location.search));
  }, []);

  return (
    <Container
      onPreviousPage={() => {
        getVehicles(true, true);
      }}
      onNextPage={() => getVehicles(false, true)}
      previousPage={previousPage}
      nextPage={nextPage}
      onInputBlur={() => {
        if (!search) {
          getVehicles(false, false);
          return;
        }
        getVehicles();
      }}
      onInputChange={(event) => setSearch(event.target.value)}
    >
      <GridView>
        {vehicles.map((vehicle: IVehicles) => {
          return <CardVehicles vehicle={vehicle} />;
        })}
      </GridView>
    </Container>
  );
};
