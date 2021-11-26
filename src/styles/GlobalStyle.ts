import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    width: 100%;
    min-height: 100vh;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    line-height: 1.625;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Sans', sans-serif;
    line-height: 1.125;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
