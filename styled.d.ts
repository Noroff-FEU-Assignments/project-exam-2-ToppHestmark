import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      primary_dark: string;
      blue_light: string;
      white: string;
      navy: string;
      ghost: string;
      gray: string;
      border: string;
      success: string;
      danger: string;
      hover: string;
    };
  }
}
