import { DefaultTheme } from 'styled-components';
import { boxShadow, layoutSpacing, flexCenter, iconButton } from './mixins';

const theme: DefaultTheme = {
  borderRadius: '10px',

  colors: {
    primary: '#003A91',
    primary_dark: '#1d427a',
    blue_light: '#0073bb',
    white: '#fff',
    white_hover: 'rgb(255, 255, 255, 0.4)',
    dark: '#000000',
    navy: '#29293a',
    ghost: '#999999',
    gray: '#aeb1be',
    neutral: '#f1f1f1',
    border: 'rgba(0, 0, 0, 0.12)',
    success: '#008009',
    danger: '#db1212',
    danger_hover: 'rgb(232, 68, 24, 0.1)',
    hover: 'rgba(0, 0, 0, 0.04)',
  },

  includes: {
    boxShadow,
    layoutSpacing,
    flexCenter,
    iconButton,
  },
};

export { theme };
