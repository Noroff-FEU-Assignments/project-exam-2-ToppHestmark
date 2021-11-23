import styled from 'styled-components/macro';

export const ButtonPrimary = styled.button`
  padding: 0.35em 1.75em;
  font-size: 1.125rem;
  cursor: pointer;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_dark};
    border: 2px solid ${({ theme }) => theme.colors.primary_dark};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ButtonSecondary = styled.button`
  padding: 0.35em 1.75em;
  font-size: 1.125rem;
  cursor: pointer;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;
