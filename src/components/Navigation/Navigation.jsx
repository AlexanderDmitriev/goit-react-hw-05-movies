import {NavigationContainer,NavigationLink} from './NavigationStyled';

const Navigation = () => {
  return (
    <header>
      <NavigationContainer>
        <NavigationLink exact to="/">
          Home
        </NavigationLink>

        <NavigationLink to="/movies">Movies</NavigationLink>
      </NavigationContainer>
    </header>
  );
};

export default Navigation;
