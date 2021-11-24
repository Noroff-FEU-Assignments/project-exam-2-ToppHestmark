import styled from 'styled-components/macro';

export const Row = styled.div`
  padding: 0.75em 0 0.25em 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.border};
`;

export const LastRow = styled(Row)`
  padding: 1em 0;
  margin-bottom: 2em;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TextLeft = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const TextRight = styled.p`
  font-size: 1.125rem;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Specifications = styled.div`
  padding: 0.75em 0 1.5em 0;

  div {
    padding: 1em 0;
    font-size: 1.125rem;
  }
`;
