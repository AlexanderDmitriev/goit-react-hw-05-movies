import { Outlet } from 'react-router-dom';
import MovieDetailsPage from '../components/MovieDetailsPage';

const MovieDataPage = () => {
  return (
    <div>
      <MovieDetailsPage />
      <Outlet />
    </div>
  );
};

export default MovieDataPage;
