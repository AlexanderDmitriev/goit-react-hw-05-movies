import React, { useState,useEffect } from 'react';
import { useLocation  } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as API from '../services/api';
import { Spinner } from '../components/AppStyled';
import {
  SearchFormButton,
  SearchFormInput,
  FilmList,
  FilmLink,
} from '../components/MoviesPage/MoviesPageStyled';

const MoviesPage = () => {
  const [movies, setMovies] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('movies')) ?? null
    );
  });
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);

  //При начальном рендере ключевое слово для поиска пустая строка
  const initialValues = { query: '' };

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    API.getMovies(values.query).then(response => {
      if (response) {
        setMovies(response.data.results);
        setLoading(false);
      } else {
        return;
      }
    });
    resetForm();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <SearchFormInput
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search films"
          />
          <SearchFormButton type="submit">Search</SearchFormButton>
        </Form>
      </Formik>
      {loading && <Spinner />}
      {movies && (
        <ul>
          {movies.map(film => (
            <FilmList key={film.id}>
              <FilmLink
                to={`/movies/${film.id}`}
                state = {{ from: location }}
              >
                {film.title} ({film.release_date.slice(0, 4)})
              </FilmLink>
            </FilmList>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;