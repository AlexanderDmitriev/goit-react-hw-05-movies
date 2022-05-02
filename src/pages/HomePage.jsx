import React, { useState, useEffect } from 'react';
import * as API from '../services/api';
import {Spinner } from '../components/AppStyled';
import {HotFilmLink,HotFilmItem,HomePageTitle} from '../components/HomePage/HomePageStyled';

export const HomePage = () => {
  const [hotFilms, setHotFilms] = useState(null);

  useEffect(() => {
    API.getTranding().then(response => {
      if (response != null) {
        setHotFilms(response.data);
      } else {
        return;
      }
    });
  },[]);

  return (
    <>
    <HomePageTitle>Trading today</HomePageTitle>
    {hotFilms?(
         <ul>
        {hotFilms.results.map(film => (
          <HotFilmItem key={film.id}>
              <HotFilmLink >{film.title}{film.name}</HotFilmLink>
          </HotFilmItem>
        ))}
      </ul>  
    ):(<Spinner/>)}
    </>
  );
};
