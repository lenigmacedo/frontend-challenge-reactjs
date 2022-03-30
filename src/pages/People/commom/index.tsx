import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardPeople } from '../../../types/card';
import { getIdFromUrl } from '../../../utils/functions';

export const CardPeople: React.FC<ICardPeople> = ({ people }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>{people.name}</h1>
      <p>Peso: {people.height}</p>
      <p>Massa: {people.mass}</p>
      <p>Cor do cabelo: {people.hair_color}</p>
      <p>Cor da pele: {people.skin_color}</p>
      <p>Cor do olho: {people.eye_color}</p>
      <p>Data de nascimento: {people.birth_year}</p>
      <p>Gênero: {people.gender} </p>
      {people.homeworld && (
        <p>
          Planeta:{' '}
          <span>
            <button
              type="button"
              onClick={() => {
                const id = getIdFromUrl(people.homeworld);
                navigate(`/?id=${id}`);
              }}
            >
              Planeta {getIdFromUrl(people.homeworld)}
            </button>
          </span>
        </p>
      )}

      {people.films.length >= 1 ? (
        <div>
          <p>Filmes:</p>
          <span>
            {people.films.map((film) => {
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

      {people.species.length >= 1 ? (
        <div>
          <p>Espécies:</p>
          <span>
            {people.species.map((specie) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(specie);
                    navigate(`/species?id=${id}`);
                  }}
                >
                  Espécie {getIdFromUrl(specie)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}

      {people.vehicles.length >= 1 ? (
        <div>
          <p>Veículos:</p>
          <span>
            {people.vehicles.map((vehicle) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(vehicle);
                    navigate(`/vehicles?id=${id}`);
                  }}
                >
                  Veículo {getIdFromUrl(vehicle)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}

      {people.starships.length >= 1 ? (
        <div>
          <p>Espaçonaves:</p>
          <span>
            {people.starships.map((starships) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(starships);
                    navigate(`/starships?id=${id}`);
                  }}
                >
                  Espaçonave {getIdFromUrl(starships)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}
    </Card>
  );
};
