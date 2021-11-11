import { extendTheme } from '@chakra-ui/react';
const theme = {
  styles: {
    global: {
      body: {
        color: 'white',
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
};

export default extendTheme(theme);
