import { Box } from '@chakra-ui/react';
import React from 'react';

import Menu from '../components/Menu';

interface Props {
  children: React.ReactNode;
  location: {
    pathname: string;
  };
}

function Layout({ children, location }: Props): JSX.Element {
  return (
    <>
      <Box position="relative" zIndex={1}>
        <Menu pathname={location.pathname} />
      </Box>
      <main className="main-content">{children}</main>
    </>
  );
}

export default Layout;
