import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import * as API from '../../services/api';
import { CastItem } from './CastItem';
import {CastText} from './CastStyled';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    API.getCast(movieId).then(response => {
      if (response != null) {
        setCast(response.data.cast);
      } else {
        return;
      }
    });
  }, [movieId]);

  return (
    <>
      {cast ? (
        <ul>
          {cast.map(actor => (
            <CastItem
              key={actor.id}
              photo={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
        </ul>
      ) : (
        <CastText>Sorry, we don't have any cast information for this movie</CastText>
      )}
    </>
  );
};

CastItem.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};

export default Cast;