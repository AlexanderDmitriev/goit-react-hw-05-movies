import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { CastItem } from './CastItem';
import { CastText, ActorsList } from './CastStyled';
import { Spinner } from '../AppStyled';
import { ICastItem } from '../Interfaces/ICastItem';

const Cast: React.FunctionComponent = () => {
  const [cast, setCast] = useState<Array<ICastItem> | null>(null);
  const [noData, setNoData] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      API.getCast(movieId).then(response => {
        if (response) {
          setCast(response.data.cast);
          if (response.data.cast.length === 0) {
            setNoData(true);
          }
        } else {
          return;
        }
      });
    }
  }, [movieId]);

  return (
    <>
      {cast ? (
        <ActorsList>
          {cast.map(actor => (
            <CastItem
              key={actor.id}
              photo={actor.profile_path}
              name={actor.name}
              character={actor.character}
            />
          ))}
        </ActorsList>
      ) : (
        <Spinner />
      )}
      {noData && (
        <CastText>
          Sorry, we don't have any cast information for this movie
        </CastText>
      )}
    </>
  );
};

export default Cast;
