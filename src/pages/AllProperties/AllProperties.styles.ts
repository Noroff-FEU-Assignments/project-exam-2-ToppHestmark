import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  ${({ theme }) => theme.includes.layoutSpacing};
  max-width: 1400px;
`;
