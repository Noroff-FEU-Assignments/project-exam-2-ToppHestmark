import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.navy};
`;

export const Wrapper = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1em;
`;
