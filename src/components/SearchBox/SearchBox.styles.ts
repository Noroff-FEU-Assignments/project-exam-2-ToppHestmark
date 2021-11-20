import styled from 'styled-components/macro';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Container = styled(Box)`
  padding: 1.25em 0;
  display: flex;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled(TextField)`
  min-width: 320px !important;
`;

export const SubmitButton = styled.button`
  padding: 0 2em;
  margin: 0 0.5em;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  cursor: pointer;
  display: inline-block;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue_light};
    border: 2px solid ${({ theme }) => theme.colors.blue_light};
  }

  @media screen and (max-width: 600px) {
    padding: 0.625em;
    margin: 0.75em 0;
  }
`;
