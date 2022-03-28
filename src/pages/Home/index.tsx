import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components/Card';
import { Container } from '../../components/Container';
import { GridView } from '../../components/GridView';
import { handlePlanets } from '../../store/actions/planets';
import { IPlanets } from '../../types/api';
import { IReduxState } from '../../types/store';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const planets = useSelector((state: IReduxState) => state.planets.results);

  const getPlanets = async (): Promise<void> => {
    await dispatch(handlePlanets());
  };

  useEffect(() => {
    getPlanets();
  }, []);

  return (
    <Container
      onInputBlur={(event) => {
        console.log(1);
      }}
      onInputChange={(event) => console.log(event.target.value)}
    >
      <GridView>
        {planets.map((planet: IPlanets) => {
          return <Card planet={planet} />;
        })}
      </GridView>
    </Container>
  );
};
