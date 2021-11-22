import styled from 'styled-components/macro';

interface ContainerProps {
  align: 'flex-start' | 'center' | 'flex-end';
}

export const Container = styled.header<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align.toString()};
`;

export const HeadingText = styled.h1`
  padding: 0.5em 0 0.1em 0;
  font-weight: 500;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
