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

  &:focus {
    outline-style: solid;
    outline-width: medium;
    outline-offset: 0.15em;
    outline-color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary_dark};
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media print {
    display: none;
  }
`;

export const ButtonPrimaryLink = styled.a`
  padding: 0.6em 1.75em;
  font-size: 1.125rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  &:hover {
    color: ${({ theme }) => theme.colors.blue_light};
  }

  &:focus {
    outline-style: solid;
    outline-width: medium;
    outline-offset: 0.1em;
    outline-color: ${({ theme }) => theme.colors.blue_light};
  }
`;

export const ButtonOutlined = styled.button`
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

  @media print {
    display: none;
  }
`;

export const ButtonOutlinedDanger = styled(ButtonOutlined)`
  &:focus,
  &:hover {
    color: ${({ theme }) => theme.colors.danger};
    background-color: ${({ theme }) => theme.colors.danger_hover};
    border: 2px solid ${({ theme }) => theme.colors.danger};
    outline: 0;
  }

  @media print {
    display: none;
  }
`;
