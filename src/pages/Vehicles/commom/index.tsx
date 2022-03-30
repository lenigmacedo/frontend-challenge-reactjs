import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../../components/Card';
import { ICardVehicles } from '../../../types/card';
import { getIdFromUrl } from '../../../utils/functions';

export const CardVehicles: React.FC<ICardVehicles> = ({ vehicle }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h1>{vehicle.name}</h1>
      <p>Modelo: {vehicle.model}</p>
      <p>Fabricante: {vehicle.manufacturer}</p>
      <p>Preço em créditos: {vehicle.cost_in_credits}</p>
      <p>Tamanho: {vehicle.length}</p>
      <p>Velocidade Máxima: {vehicle.max_atmosphering_speed}</p>
      <p>Tripulação: {vehicle.crew}</p>
      <p>Passageiros: {vehicle.passengers}</p>
      <p>Capacidade de carga: {vehicle.cargo_capacity}</p>
      <p>Consumíveis: {vehicle.consumables}</p>
      <p>Classe do veículo: {vehicle.vehicle_class}</p>

      {vehicle.films.length >= 1 ? (
        <div>
          <p>Filmes:</p>
          <span>
            {vehicle.films.map((film) => {
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

      {vehicle.pilots.length >= 1 ? (
        <div>
          <p>Pilotos:</p>
          <span>
            {vehicle.pilots.map((pilot) => {
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
