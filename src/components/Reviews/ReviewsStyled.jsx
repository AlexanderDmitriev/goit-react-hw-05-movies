import styled from '@emotion/styled';

export const ReviewText = styled.p`
font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: grey;
  `;

export const ReviewTitle = styled.h2`
font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: black;
  `;

export const ReviewItem = styled.li`
list-style: none;
padding: 5px;
border-radius: 4px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
:not(:last-child) {
  margin-bottom: 8px;
}
`;