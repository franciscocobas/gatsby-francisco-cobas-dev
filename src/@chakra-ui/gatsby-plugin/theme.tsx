import { extendTheme } from '@chakra-ui/react';
const theme = {
  styles: {
    global: {
      body: {
        fontFamily: 'IBMPlex',
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: 'IBMPlex',
      },
    },
  },
  colors: {
    black: '#050505',
  },
  sizes: {
    container: {
      xl: '1400px',
    },
  },
};

export default extendTheme(theme);
