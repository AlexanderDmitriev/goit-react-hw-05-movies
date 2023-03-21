import React, { useState, useEffect } from 'react';
import * as API from '../../services/api';
import {
  MoviePageText,
  Poster,
  MoviePageTitle,
  GenresItem,
  MoviePageContent,
  MoviePageDescription,
  DetailsLink,
} from './MovieDetailsPageStyled';
import { Spinner } from '../AppStyled';
import {
  Outlet,
  useParams,
  useLocation,
  useNavigate,
  NavigateFunction,
} from 'react-router-dom';
import GoBackButton from '../GoBackButton/GoBackButton';
import {IMovieInfo} from "./IMovieInfo";

type LocationProps = {
  state: {
    from: Location;
  };
};

const MovieDetailsPage: React.FunctionComponent = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState<IMovieInfo | null>(null);
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation() as LocationProps;

  const goBack = () => {
    navigate(location?.state?.from ?? '/');
  };

  useEffect(() => {
    API.getMovieDetails(movieId).then(response => {
      if (response) {
        setMovieInfo(response.data);
      } else {
        setTimeout(() => {
          navigate('/');
        }, 3000);
        return;
      }
    });
  }, [location, movieId, navigate]);

  return (
    <>
      {movieInfo ? (
        <>
          <GoBackButton onClick={goBack} />
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
        <Spinner />
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
