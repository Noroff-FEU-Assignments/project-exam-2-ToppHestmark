import { DefaultTheme } from 'styled-components';
import { boxShadow } from './mixins';

const theme: DefaultTheme = {
  borderRadius: '5px',

  colors: {
    primary: '#003a91',
    primary_dark: '#1d427a',
    blue_light: '#0073bb',
    white: '#fff',
    navy: '#29293a',
    ghost: '#999999',
    gray: '#aeb1be',
    border: 'rgba(0, 0, 0, 0.12)',
    success: '#008009',
    danger: '#db1212',
    hover: 'rgba(0, 0, 0, 0.04)',
  },

  includes: {
    boxShadow,
  },
};

export { theme };
