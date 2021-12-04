import styled from 'styled-components';
import { FormControl, Button, FormGroup } from '@mui/material';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const FormWrapper = styled(FormGroup)`
  width: 90vw;
  padding: 1.5em;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media screen and (min-width: 480px) {
    max-width: 500px;
    padding: 2.25em;
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

export const SubmitButton = styled(ButtonPrimary)`
  margin: 1.2em 0;
`;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.danger};
  text-align: center;
  font-weight: 350;
`;
