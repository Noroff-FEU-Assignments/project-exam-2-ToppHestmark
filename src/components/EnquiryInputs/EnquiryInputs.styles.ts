import styled from 'styled-components/macro';
import { FormControl } from '@mui/material';

export const GridWrapper = styled.div`
  display: grid;
  grid-gap: 0.75em 1.25em;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const MessageWrapper = styled(FormControl)`
  margin: 0.75em 0 1.25em 0 !important;
`;
