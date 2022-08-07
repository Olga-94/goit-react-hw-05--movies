import {Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './AppBar.styled';
import Navigation from '../Navigation/Navigation';
import { Box } from 'components/Box';

 const AppBar = () => {
  return (
    <Box >
    <Header>
      <Navigation />
    </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Box>
  );
}

export default AppBar;