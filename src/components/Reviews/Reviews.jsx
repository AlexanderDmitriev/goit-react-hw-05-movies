import { ReviewsItem } from './ReviewsItem';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as API from '../../services/api';
import { ReviewText } from './ReviewsStyled';

const Reviews = () => {
  const [review, setReview] = useState(null);
  const {movieId} = useParams();

  useEffect(() => {
    API.getReviews(movieId).then(response => {
      if (response != null) {
        setReview(response.data.results);
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
        <ReviewText>Sorry, we don't have any reviews for this movie</ReviewText>
      )}
    </>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;