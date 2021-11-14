import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;
    margin: 0 auto;
    font-family: 'Roboto', sans-serif;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
