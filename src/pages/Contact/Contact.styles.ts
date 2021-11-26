import styled from 'styled-components/macro';
import { FormControl, FormGroup } from '@mui/material';

export const Container = styled.div`
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const FormWrapper = styled(FormGroup)`
  max-width: 600px;
  margin: 2em auto;
  padding: 2.25em;
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

export const Spacer = styled.div`
  width: 100%;
  padding: 0.5em 0;
`;
