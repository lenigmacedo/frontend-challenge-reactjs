import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardStarships } from '../../../types/card';
import { getIdFromUrl } from '../../../utils/functions';

export const CardStarships: React.FC<ICardStarships> = ({ starship }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>{starship.name}</h1>
      <p>Modelo: {starship.model}</p>
      <p>Fabricante: {starship.manufacturer}</p>
      <p>Preço em créditos: {starship.cost_in_credits}</p>
      <p>Tamanho: {starship.length}</p>
      <p>Velocidade Máxima: {starship.max_atmosphering_speed}</p>
      <p>Tripulação: {starship.crew}</p>
      <p>Passageiros: {starship.passengers}</p>
      <p>Capacidade de carga: {starship.cargo_capacity}</p>
      <p>Consumíveis: {starship.consumables}</p>
      <p>Classe do veículo: {starship.starship_class}</p>

      {starship.films.length >= 1 ? (
        <div>
          <p>Filmes:</p>
          <span>
            {starship.films.map((film) => {
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

      {starship.pilots.length >= 1 ? (
        <div>
          <p>Pilotos:</p>
          <span>
            {starship.pilots.map((pilot) => {
              return (
                <button
                  type="button"
                  onClick={() => {
                    const id = getIdFromUrl(pilot);
                    navigate(`/people?id=${id}`);
                  }}
                >
                  Piloto {getIdFromUrl(pilot)}
                </button>
              );
            })}
          </span>
        </div>
      ) : null}
    </Card>
  );
};
