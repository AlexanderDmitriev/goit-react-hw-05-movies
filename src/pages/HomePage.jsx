import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as API from '../services/api';
import { Spinner } from '../components/AppStyled';
import {
  HotFilmLink,
  HotFilmItem,
  HomePageTitle,
} from '../components/HomePage/HomePageStyled';

const HomePage = () => {
  //Хук для хранения трендовых фильмов
  const [hotFilms, setHotFilms] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  navigate('/');

  useEffect(() => {
    API.getTranding().then(response => {
      location.state={from:`${location.pathname}`};
      if (response != null) {
        setHotFilms(response.data);
      } else {
        return;
      }
    })
  }, [location]);

  return (
    <>
      <HomePageTitle>Trading today</HomePageTitle>
      {hotFilms ? (
        <ul>
          {hotFilms.results.map(film => (
            <HotFilmItem key={film.id}>
              <HotFilmLink
                to={`/movies/${film.id}`}
                state = {{ from: location }}
              >
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
