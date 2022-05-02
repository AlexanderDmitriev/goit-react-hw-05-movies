import styled from '@emotion/styled';

export const CastStyledItem = styled.li`
width: 256px;
list-style: none;
padding: 5px;
border-radius: 4px;
box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
:not(:last-child) {
  margin-bottom: 8px;
}
`;

export const CastText = styled.p`
font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: grey;
  `;

export const ActorsPhoto = styled.img`
width: 128px;
`;