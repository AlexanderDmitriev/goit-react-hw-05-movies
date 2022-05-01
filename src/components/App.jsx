import { ToastContainer } from 'react-toastify';
import {MovieDataPage} from '../pages/MovieDataPage'

export const App = () => {
  return (
    <div>
      <MovieDataPage/>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
