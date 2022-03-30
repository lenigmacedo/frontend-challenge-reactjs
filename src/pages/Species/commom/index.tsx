import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardSpecies } from '../../../types/card';
import { getIdFromUrl } from '../../../utils/functions';

export const CardSpecies: React.FC<ICardSpecies> = ({ specie }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>{specie.name}</h1>
      <p>Classificação: {specie.classification}</p>
      <p>Designação: {specie.designation}</p>
      <p>Média de altura: {specie.average_height}</p>
      <p>Cor de pele: {specie.skin_colors}</p>
      <p>Cor de cabelo: {specie.hair_colors}</p>
      <p>Cor do olho: {specie.eye_colors}</p>
      <p>Média de vida: {specie.average_lifespan}</p>
      <p>Língua: {specie.language}</p>
      {specie.homeworld && (
        <p>
          Planeta:{' '}
          <span>
            <button
              type="button"
              onClick={() => {
                const id = getIdFromUrl(specie.homeworld);
                navigate(`/?id=${id}`);
              }}
            >
              Planeta {getIdFromUrl(specie.homeworld)}
            </button>
          </span>
        </p>
      )}

      {specie.films.length >= 1 ? (
        <div>
          <p>Filmes:</p>
          <span>
            {specie.films.map((film) => {
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

      {specie.people.length >= 1 ? (
        <div>
          <p>Pessoas:</p>
          <span>
            {specie.people.map((people) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(people);
                    navigate(`/people?id=${id}`);
                  }}
                >
                  Pessoa {getIdFromUrl(people)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}
    </Card>
  );
};
