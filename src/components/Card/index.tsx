/* eslint-disable camelcase */
import React from 'react';
import { ICardProps } from '../../types/card';
import { CardWrapper } from './styled';

export const Card: React.FC<ICardProps> = ({ planet }) => {
  return (
    <CardWrapper>
      <h1>{planet.name}</h1>
      <p>Periodo de rotação: {planet.rotation_period}</p>
      <p>Periodo de órbita: {planet.orbital_period}</p>
      <p>Diâmetro: {planet.diameter}</p>
      <p>Clima: {planet.climate}</p>
      <p>Gravidade: {planet.gravity}</p>
      <p>Terreno: {planet.terrain}</p>
      <p>Possui água na superfície: {planet.surface_water ? 'Sim' : 'Não'} </p>
      <p>População: {planet.population}</p>
      <p>
        Residentes:{' '}
        <span>
          {planet.residents.map((resident) => {
            return <p>{resident}</p>;
          })}
        </span>{' '}
      </p>
      <p>
        Filmes:{' '}
        <span>
          {planet.films.map((resident) => {
            return <p>{resident}</p>;
          })}
        </span>{' '}
      </p>
    </CardWrapper>
  );
};
