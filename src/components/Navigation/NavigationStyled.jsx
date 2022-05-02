import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationContainer = styled.nav`
  padding: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 12px;
`;

export const NavigationLink = styled(NavLink)`
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
  padding: 8px;
  :hover,:focus {
    color: red;
  }
`;