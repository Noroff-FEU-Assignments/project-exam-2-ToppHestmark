import Topbar from './Topbar';
import Footer from './Footer';
import { Container } from './LayoutWrapper.styles';
import React from 'react';

interface ILayoutWrapper {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<ILayoutWrapper> = ({ children }) => {
  return (
    <div>
      <Container>
        <Topbar />
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default LayoutWrapper;
