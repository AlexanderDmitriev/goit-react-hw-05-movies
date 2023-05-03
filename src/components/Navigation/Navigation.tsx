import React from 'react';
import {NavigationContainer,NavigationLink} from './NavigationStyled';

const Navigation: React.FunctionComponent = () => {
  return (
    <header>
      <NavigationContainer>
        <NavigationLink end to="/">
          Home
        </NavigationLink>

        <NavigationLink to="/movies">Movies</NavigationLink>
      </NavigationContainer>
    </header>
  );
};

export default Navigation;
