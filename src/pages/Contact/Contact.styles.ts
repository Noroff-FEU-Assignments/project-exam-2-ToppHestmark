import styled from 'styled-components/macro';
import { FormControl, FormGroup } from '@mui/material';

export const Container = styled.div`
  margin: 3em 0;
`;

export const FormWrapper = styled(FormGroup)`
  max-width: 500px;
  margin: 0 auto;
  padding: 2em;
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ theme }) => theme.includes.boxShadow}

  @media screen and (max-width: 480px) {
    padding: 1.5em;
  }
`;

export const InputWrapper = styled(FormControl)`
  padding: 0.8em 0 !important;
`;
