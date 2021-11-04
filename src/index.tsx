import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './context/AuthProvider';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import LayoutWrapper from './Layout/LayoutWrapper';

import Routes from './Routes';
const root = document.getElementById('root');

ReactDOM.render(
  <AuthProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <LayoutWrapper>
          <Routes />
        </LayoutWrapper>
      </Router>
    </ThemeProvider>
  </AuthProvider>,
  root
);
