import styled from 'styled-components';
import { FormControl, Button, FormGroup } from '@mui/material';
import { boxShadow } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled(FormGroup)`
  width: 90vw;
  padding: 2em;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${boxShadow}

  @media screen and (min-width: 480px) {
    width: 400px;
  }
`;

export const TitleText = styled.h4`
  text-align: center;
  margin: 0.5em;
  font-weight: 400;
  font-size: 2rem;
`;

export const InputWrap = styled(FormControl)`
  width: 100%;
  margin: 0.8em 0 !important;
`;

export const SubmitButton = styled(Button).attrs(() => ({
  variant: 'contained',
}))`
  margin: 1.2em 0 !important;
`;
