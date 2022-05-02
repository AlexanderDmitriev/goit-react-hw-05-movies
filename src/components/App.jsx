import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
// import {MovieDataPage} from '../pages/MovieDataPage'; 
import {Container} from './AppStyled';
//import Navigation from '../components/Navigation/Navigation';
//import {HomePage} from '../pages/HomePage';
import {MoviesPage} from '../pages/MoviesPage';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      {/* <Navigation/> */}
      {/* <HomePage/> */}
      {/* <MovieDataPage/> */}
      <MoviesPage/>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
