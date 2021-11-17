import styled from 'styled-components/macro';
import { FormControl } from '@mui/material';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
`;

export const MessageWrapper = styled(FormControl)`
  margin: 2em;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
