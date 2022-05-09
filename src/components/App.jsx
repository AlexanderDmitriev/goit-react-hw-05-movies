import {
  Route,
  Routes,
  /* useNavigate, useLocation */
} from 'react-router-dom';
import { lazy, Suspense /* useEffect */ } from 'react';
import { Toaster } from 'react-hot-toast';
import GlobalStyle from '../GlobalStyle';
import { Container, Spinner } from './AppStyled';
import Navigation from '../components/Navigation/Navigation';
import GoBackButton from '../components/GoBackButton';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDataPage = lazy(() => import('../pages/MovieDataPage'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const App = () => {
  //Костыль в надежде решить проблему
  /*   const navigate = useNavigate();
  const location = useLocation(); */

  /*   useEffect(() => {
    if (location.pathname === '/goit-react-hw-05-movies') {
      navigate('/');
    }
  }, [location.pathname, navigate]); */

  return (
    <Container>
      <GlobalStyle />
      <Navigation />
      <GoBackButton />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDataPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </Container>
  );
};
