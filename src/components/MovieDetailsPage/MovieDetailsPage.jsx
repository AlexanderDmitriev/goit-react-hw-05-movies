import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';
import {
  MoviePageText,
  Poster,
  MoviePageTitle,
  GenresItem,
  MoviePageContent,
  MoviePageDescription,
  DetailsLink
} from './MovieDetailsPageStyled';
import {Spinner } from '../AppStyled';
import { Outlet, useParams, useLocation } from "react-router-dom";

const MovieDetailsPage = () => {
  const {movieId} = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    API.getMovieDetails(movieId).then(response => {
      console.log(location);
      location.state={from:`${location.pathname}`};
      if (response != null) {
        setMovieInfo(response.data);
      } else {
        return;
      }
    });
  }, [location, movieId]);

  return (
    <>
      {movieInfo ? (
        <>
          <MoviePageContent>
            <Poster
              src={`https://image.tmdb.org/t/p/original${movieInfo.poster_path}`}
              alt={movieInfo.title}
            />
            <MoviePageDescription>
              <h2>
                {movieInfo.title} ({movieInfo.release_date.slice(0, 4)})
              </h2>
              <MoviePageText>User score {movieInfo.vote_average}</MoviePageText>
              <MoviePageTitle>Overview</MoviePageTitle>
              <MoviePageText>{movieInfo.overview}</MoviePageText>
              <MoviePageTitle>Genres</MoviePageTitle>
              <MoviePageText>
                {movieInfo.genres.map(film => (
                  <GenresItem key={film.id}>{film.name}</GenresItem>
                ))}
              </MoviePageText>
            </MoviePageDescription>
          </MoviePageContent>
          <MoviePageText>Additional information</MoviePageText>
          <ul>
            <DetailsLink to={`/movies/${movieId}/cast`}>Cast</DetailsLink>
            <DetailsLink to={`/movies/${movieId}/reviews`}>Reviews</DetailsLink>
          </ul>
        </>
      ) : (
        <Spinner/>
      )}
      <Outlet/>
    </>
  );
};

export default MovieDetailsPage;