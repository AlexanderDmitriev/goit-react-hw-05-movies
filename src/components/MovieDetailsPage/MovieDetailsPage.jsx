import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';
import {MoviePageText,Poster,MoviePageTitle,GenresItem,MoviePageContent,MoviePageDescription} from './MovieDetailsPageStyled';

export const MovieDetailsPage = () => {
  const pageId = 414906;
  const [movieInfo, setMovieInfo] = useState(null);

  useEffect(() => {
    API.getMovieDetails(pageId).then(response => {
      console.log(response.data);
      if (response != null) {
        setMovieInfo(response.data);
      } else {
        return;
      }
    });
  }, [pageId]);

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
              <MoviePageText>
                User score {movieInfo.vote_average}
              </MoviePageText>
              <MoviePageTitle>Overview</MoviePageTitle>
              <MoviePageText>{movieInfo.overview}</MoviePageText>
              <MoviePageTitle>Genres</MoviePageTitle>
              <MoviePageText>{movieInfo.genres.map(film =><GenresItem key={film.id}>{film.name}</GenresItem> )}</MoviePageText>
            </MoviePageDescription>
          </MoviePageContent>
          <MoviePageText>Additional information</MoviePageText>
          <ul>
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
