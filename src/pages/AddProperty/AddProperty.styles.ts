import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';

export const FormContainer = styled(FormGroup)`
  max-width: 992px;
  margin: 2em auto;

  @media screen and (min-width: 992px) {
    padding: 3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.includes.boxShadow};
  }
`;
