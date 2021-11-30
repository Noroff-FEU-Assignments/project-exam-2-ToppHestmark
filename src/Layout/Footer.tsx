import React from 'react';
import { Container, Wrapper } from './Footer.styles';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Wrapper>© {year} Holidaze Group</Wrapper>
    </Container>
  );
};

export default Footer;
