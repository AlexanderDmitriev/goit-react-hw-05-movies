import { Reviews } from '../components/Reviews/Reviews';
import { MovieDetailsPage } from '../components/MovieDetailsPage/MovieDetailsPage';
import {Cast} from '../components/Cast/Cast'
export const MovieDataPage = () => {
  return (
    <>
      <MovieDetailsPage/>
      <Cast/>
      <Reviews/>
    </>
  );
};
