import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardPlanets } from '../../../types/card';
import { getIdFromUrl } from '../../../utils/functions';

export const CardPlanets: React.FC<ICardPlanets> = ({ planet }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>{planet.name}</h1>
      <p>Periodo de rotação: {planet.rotation_period}</p>
      <p>Periodo de órbita: {planet.orbital_period}</p>
      <p>Diâmetro: {planet.diameter}</p>
      <p>Clima: {planet.climate}</p>
      <p>Gravidade: {planet.gravity}</p>
      <p>Terreno: {planet.terrain}</p>
      <p>Possui água na superfície: {planet.surface_water ? 'Sim' : 'Não'} </p>
      <p>População: {planet.population}</p>
      {planet.residents.length >= 1 ? (
        <div>
          <p>Residentes:</p>
          <span>
            {planet.residents.map((resident) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(resident);
                    navigate(`/people?id=${id}`);
                  }}
                >
                  Residente {getIdFromUrl(resident)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}

      {planet.films.length >= 1 ? (
        <div>
          <p>Filmes:</p>
          <span>
            {planet.films.map((film) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(film);
                    navigate(`/films?id=${id}`);
                  }}
                >
                  Filme {getIdFromUrl(film)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}
    </Card>
  );
};
