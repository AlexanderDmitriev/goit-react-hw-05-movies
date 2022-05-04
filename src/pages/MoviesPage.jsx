import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as API from '../services/api';
import { Spinner } from '../components/AppStyled';
import {
  SearchFormButton,
  SearchFormInput,
  FilmList,
  FilmLink
} from '../components/MoviesPage/MoviesPageStyled';
import { useNavigate, useLocation } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    console.log(location);
    navigate(-1)};

  //При начальном рендере ключевое слово для поиска пустая строка
  const initialValues = { query: '' };

  const handleSubmit = (values, { resetForm }) => {
    setLoading(true);
    API.getMovies(values.query).then(response => {
      if (response != null) {
        setMovies(response.data.results);
        setLoading(false);
      } else {
        return;
      }
    });
    resetForm();
  };

 /*  const history = useHistory();

  const handleClick = () => {
    history.push("/home");
  }; */

  return (
    <>
      <button type='click'  onClick={goBack} >Go back</button>
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
              <FilmLink to={`/movies/${film.id}`}>{film.title} ({film.release_date.slice(0, 4)})</FilmLink>
            </FilmList>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;