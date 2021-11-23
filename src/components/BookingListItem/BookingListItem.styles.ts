import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 2em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 1.625rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowText = styled.p`
  font-size: 1.0125rem;
  font-weight: 400;
  padding: 0 0.4em 0 0;
`;
