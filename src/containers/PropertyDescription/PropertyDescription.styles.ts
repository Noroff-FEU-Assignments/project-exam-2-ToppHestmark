import styled from 'styled-components/macro';

export const Box = styled.div`
  padding: 1em 0;
  max-width: 750px;
`;

export const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  padding: 1em 0 0 0;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Included = styled.p<{ show: boolean }>`
  color: ${({ theme }) => theme.colors.success};
  display: ${({ show }) => (show ? 'block' : 'none')};
  font-size: 0.875rem;

  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
