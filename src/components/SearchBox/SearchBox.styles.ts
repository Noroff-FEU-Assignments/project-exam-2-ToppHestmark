import styled from 'styled-components/macro';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  width: 93.5%;
  padding: 2em 0 2.625em 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    padding: 3em 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.white};

  @media screen and (max-width: 576px) {
    background-color: transparent;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 576px) {
    padding: 0.4em 1.25em;
  }
`;

export const SearchInput = styled(TextField)`
  background-color: white; // This because Material-UI didn't allowed SC props
  border-radius: 25px; // This because Material-UI didn't allowed SC props
  min-width: 280px !important;

  fieldset,
  legend {
    display: none;
  }

  .MuiSvgIcon-root {
    color: ${({ theme }) => theme.colors.navy};
  }

  @media screen and (max-width: 576px) {
    width: 100% !important;
  }

  @media screen and (min-width: 576px) {
    min-width: 320px !important;
  }
`;

export const SubmitButton = styled.button`
  padding: 1em;
  font-size: 1rem;
  cursor: pointer;
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.navy};
  border-radius: 30px;
  scale: 0.9;

  &:hover {
    background-color: ${({ theme }) => theme.colors.dark};
    border: 2px solid ${({ theme }) => theme.colors.dark};
  }

  @media screen and (max-width: 576px) {
    padding: 0.625em;
    margin: 0.75em 0;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    padding: 1em;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.primary};

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary_dark};
      border: 2px solid ${({ theme }) => theme.colors.primary_dark};
    }
  }
`;
