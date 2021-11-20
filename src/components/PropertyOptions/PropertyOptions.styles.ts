import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';

export const Form = styled(FormGroup)`
  margin: 1.25em 0;
`;

export const SwitchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1em;
  justify-content: space-evenly;

  .MuiFormControlLabel-root {
    margin: -20px 0;
  }

  @media screen and (max-width: 768px) {
    grid-gap: 2em;
  }
  @media screen and (max-width: 480px) {
    grid-gap: 3em;
  }
`;
