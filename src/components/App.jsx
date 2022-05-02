import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
import {MovieDataPage} from '../pages/MovieDataPage';
import {Container} from './AppStyled';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <MovieDataPage/>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
