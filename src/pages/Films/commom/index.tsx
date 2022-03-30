import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardFilms } from '../../../types/card/index';
import { getIdFromUrl } from '../../../utils/functions';
import { CardWrapper } from './styled';

export const CardFilm: React.FC<ICardFilms> = ({ film }) => {
  const navigate = useNavigate();

  return (
    <CardWrapper>
      <Card>
        <h1>{film.title}</h1>
        <p>Diretor: {film.director}</p>
        <p>Produtor: {film.producer}</p>
        <p>Data de lançamento: {film.release_date}</p>

        {film.characters.length >= 1 ? (
          <div>
            <p>Personagens:</p>
            <span>
              {film.characters.map((person) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      const id = getIdFromUrl(person);
                      navigate(`/people?id=${id}`);
                    }}
                  >
                    Personagem {getIdFromUrl(person)}
                  </button>
                );
              })}
            </span>
          </div>
        ) : null}

        {film.planets.length >= 1 ? (
          <div>
            <p>Planetas:</p>
            <span>
              {film.planets.map((planet) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      const id = getIdFromUrl(planet);
                      navigate(`/?id=${id}`);
                    }}
                  >
                    Planeta {getIdFromUrl(planet)}
                  </button>
                );
              })}
            </span>
          </div>
        ) : null}

        {film.starships.length >= 1 ? (
          <div>
            <p>Espaçonaves:</p>
            <span>
              {film.starships.map((starship) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      const id = getIdFromUrl(starship);
                      navigate(`/starships?id=${id}`);
                    }}
                  >
                    Espaçonave {getIdFromUrl(starship)}
                  </button>
                );
              })}
            </span>
          </div>
        ) : null}

        {film.vehicles.length >= 1 ? (
          <div>
            <p>Veiculos:</p>
            <span>
              {film.vehicles.map((vehicle) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      const id = getIdFromUrl(vehicle);
                      navigate(`/vehicles?id=${id}`);
                    }}
                  >
                    Veiculo {getIdFromUrl(vehicle)}
                  </button>
                );
              })}
            </span>
          </div>
        ) : null}

        {film.species.length >= 1 ? (
          <div>
            <p>Espécies:</p>
            <span>
              {film.species.map((specie) => {
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
      </Card>
    </CardWrapper>
  );
};
