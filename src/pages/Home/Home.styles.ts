import styled from 'styled-components/macro';

export const TopSection = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Spacer = styled.div`
  padding: 1.5em 0;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const LowerSection = styled.div`
  min-height: 100vh;
  overflow-y: hidden;
`;
