import styled from '@emotion/styled';

export const MoviePageText = styled.p`
  font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: grey;
`;

export const MoviePageTitle = styled.h3`
  font-family: Raleway, sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.2;
  color: black;
`;

export const Poster = styled.img`
  width: 256px;
`;

export const GenresItem = styled.span`
  :not(:last-child) {
    padding-right: 8px;
  }
`;

export const MoviePageContent = styled.div`
  display: flex;
`;

export const MoviePageDescription = styled.div`
  padding: 15px;
`;
