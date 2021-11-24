import styled from 'styled-components/macro';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  padding: 1.25em 0;
  display: flex;
  z-index: 3;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled(TextField)`
  background-color: white; // This because Material-UI didn't allowed SC props
  border-radius: 5px; // This because Material-UI didn't allowed SC props

  fieldset,
  legend {
    display: none;
  }

  @media screen and (min-width: 576px) {
    min-width: 320px !important;
  }
`;

export const SubmitButton = styled.button`
  padding: 0 2.5em;
  margin: 0 0.5em;
  font-size: 1.25rem;
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

  @media screen and (max-width: 576px) {
    padding: 0.625em;
    margin: 0.75em 0;
  }
`;
