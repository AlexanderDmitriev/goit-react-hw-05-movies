import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchFormButton = styled.button`
  height: 25px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  margin-left: 5px;
  :hover,
  :focus {
    opacity: 1;
  }
`;

export const SearchFormInput = styled(Field)`
  width: 50%;
  font-size: 16px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font-size:14px;
  }
`;

export const FilmList = styled.li`
list-style: none;
:not(:last-child) {
  margin-bottom: 4px;
}
`;

export const FilmLink = styled.p`
font-family: Raleway, sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: grey;
  `;