import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
// import {MovieDataPage} from '../pages/MovieDataPage'; 
import {Container} from './AppStyled';
//import Navigation from '../components/Navigation/Navigation';
import {HomePage} from '../pages/HomePage';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      {/* <Navigation/> */}
      <HomePage/>
      {/* <MovieDataPage/> */}
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
