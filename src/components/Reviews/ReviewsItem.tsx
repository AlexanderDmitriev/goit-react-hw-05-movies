import React from 'react';
import { ReviewText, ReviewTitle, ReviewItem } from './ReviewsStyled';

interface IReviewsItem {
  author: string;
  content: string;
}

export const ReviewsItem:React.FunctionComponent<IReviewsItem> = (props) => {
  const { author, content } = props;
  return (
    <ReviewItem>
      <ReviewTitle>{author}</ReviewTitle>
      <ReviewText>{content}</ReviewText>
    </ReviewItem>
  );
};
