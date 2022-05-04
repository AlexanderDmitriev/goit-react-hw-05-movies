import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '../GlobalStyle';
import { Container, Spinner } from './AppStyled';
import Navigation from '../components/Navigation/Navigation';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */)
);
const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);
const MovieDataPage = lazy(() =>
  import('../pages/MovieDataPage' /* webpackChunkName: "MovieDataPage" */)
);
const Cast = lazy(() => import('./Cast' /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import('./Reviews' /* webpackChunkName: "Reviews" */)
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage' /* webpackChunkName: "NotFoundPage" */)
);

export const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDataPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
