import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../store';
import { IFilms } from '../../types/api';
// import { handleFilms } from '../../store/actions/films';
import { IResponseFilms } from '../../types/service';
import { IReduxState } from '../../types/store';

export const FilmsPage: React.FC = () => {
  const films = useSelector((state: IReduxState) => state.films.results);

  return (
    <div>
      <p>pika</p>
      {films.length > 0 ? (
        films.map((film: IFilms) => {
          return <p>{film.title}</p>;
        })
      ) : (
        <p>cu</p>
      )}
    </div>
  );
};
