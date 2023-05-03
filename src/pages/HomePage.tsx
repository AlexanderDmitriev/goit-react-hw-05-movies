import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import * as API from '../services/api';
import { Spinner } from '../components/AppStyled';
import {
  HotFilmLink,
  HotFilmItem,
  HomePageTitle,
} from '../components/HomePage/HomePageStyled';
import { IHotFilms } from '../components/Interfaces/IHotFilms';

const HomePage: React.FunctionComponent = () => {
  //Хук для хранения трендовых фильмов
  const [hotFilms, setHotFilms] = useState<IHotFilms | null>(null);
  const location = useLocation();

  useEffect(() => {
    API.getTranding().then(response => {
      if (response) {
        setHotFilms(response.data);
      } else {
        return;
      }
    });
  }, [location]);

  return (
    <>
      <HomePageTitle>Trading today</HomePageTitle>
      {hotFilms ? (
        <ul>
          {hotFilms.results.map(film => (
            <HotFilmItem key={film.id}>
              <HotFilmLink to={`/movies/${film.id}`} state={{ from: location }}>
                {film.title}
                {film.name}
              </HotFilmLink>
            </HotFilmItem>
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default HomePage;
