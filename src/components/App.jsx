import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
import {MovieDataPage} from '../pages/MovieDataPage'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <MovieDataPage/>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
