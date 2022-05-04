//import Reviews  from '../components/Reviews';
import  MovieDetailsPage  from '../components/MovieDetailsPage';
//import Cast from '../components/Cast'
import { Outlet } from 'react-router-dom';
export const MovieDataPage = () => {
  return (
    <div>
      <MovieDetailsPage/>
      {/* <Cast/> */}
      {/* <Reviews/> */}
      <Outlet/>
    </div>
  );
};
