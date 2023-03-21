import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../services/api';
import { ReviewText } from './ReviewsStyled';
import { ReviewsItem } from './ReviewsItem';
import { Spinner } from '../AppStyled';

interface IReviews {
  id: number;
  author: string;
  content: string;
}

const Reviews: React.FunctionComponent = () => {
  const [review, setReview] = useState<Array<IReviews> | null>(null);
  const [noData, setNoData] = useState<boolean>(false);
  const { movieId } = useParams<string>();

  //Получаем даннык об актёрах и пока загружаем включаем спиннер
  useEffect(() => {
    API.getReviews(movieId).then(response => {
      if (response) {
        setReview(response.data.results);
        if (response.data.results.length === 0) {
          setNoData(true);
        }
      } else {
        return;
      }
    });
  }, [movieId]);

  return (
    <>
      {review ? (
        <ul>
          {review.map(rev => (
            <ReviewsItem
              key={rev.id}
              author={rev.author}
              content={rev.content}
            />
          ))}
        </ul>
      ) : (
        <Spinner />
      )}
      {noData && (
        <ReviewText>Sorry, we don't have any reviews for this movie</ReviewText>
      )}
    </>
  );
};

export default Reviews;
