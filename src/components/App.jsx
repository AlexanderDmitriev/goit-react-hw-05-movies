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
        <Route path="/" exact>
          <HomePage/>
        </Route>
        <Route path="/movies">
          <MovieDataPage />
        </Route>
        <Route path="/movies/:movieId">
          <MoviesPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Routes>

      <ToastContainer autoClose={2000} />
    </Container>
  );
};
