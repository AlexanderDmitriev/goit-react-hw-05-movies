import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
import { MovieDataPage } from '../pages/MovieDataPage';
import { Container } from './AppStyled';
import Navigation from '../components/Navigation/Navigation';
import { HomePage } from '../pages/HomePage';
import { MoviesPage } from '../pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFoundPage';

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage  />} />
        <Route path="/movies/:movieId" element={< MovieDataPage/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ToastContainer autoClose={2000} />
    </Container>
  );
};
