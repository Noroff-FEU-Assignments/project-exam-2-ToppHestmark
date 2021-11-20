import styled from 'styled-components/macro';
import { FormControl } from '@mui/material';

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 0.75em 1.25em;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5em;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InputWrapper = styled(FormControl)`
  margin: 0.5em 0 !important;
`;
