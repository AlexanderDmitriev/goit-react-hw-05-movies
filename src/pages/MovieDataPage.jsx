import Reviews  from '../components/Reviews';
import  MovieDetailsPage  from '../components/MovieDetailsPage';
import Cast from '../components/Cast'
export const MovieDataPage = () => {
  return (
    <>
      <MovieDetailsPage/>
      <Cast/>
      <Reviews/>
    </>
  );
};
