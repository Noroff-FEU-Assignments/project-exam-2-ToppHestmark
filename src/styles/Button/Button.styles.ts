import styled from 'styled-components/macro';

export const ButtonPrimary = styled.button`
  min-width: 150px;
  padding: 0.625em 1.75em;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 2;

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

export const ButtonPrimaryLight = styled(ButtonPrimary)`
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.navy};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white_hover};
    border: 2px solid ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.white_hover};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonPrimaryDark = styled(ButtonPrimary)`
  border: 2px solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    border: 2px solid ${({ theme }) => theme.colors.dark};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.colors.navy};
    background-color: ${({ theme }) => theme.colors.dark};
  }
`;

export const ButtonPrimaryLink = styled.a`
  padding: 0.6em 0;
  font-size: 1.125rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.blue_light};
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;

  &:hover {
    opacity: 0.85;
  }

  &:focus {
    outline-style: solid;
    outline-width: medium;
    outline-offset: 0.1em;
    outline-color: ${({ theme }) => theme.colors.blue_light};
  }
`;

export const ButtonOutlined = styled.button`
  min-width: 150px;
  padding: 0.625em 1.75em;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  display: inline-block;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  z-index: 2;

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
