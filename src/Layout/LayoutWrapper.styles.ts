import styled from 'styled-components/macro';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.navy};
  margin: 0 auto;
`;
