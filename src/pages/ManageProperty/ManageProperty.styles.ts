import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const FormContainer = styled(FormGroup)`
  max-width: 992px;
  margin: 2em auto;

  @media screen and (min-width: 992px) {
    padding: 3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.includes.boxShadow};
  }
`;

export const Button = styled(ButtonPrimary)`
  margin-top: 1.25em;
`;

export const Spacer = styled.div`
  width: 100%;
  padding: 1.25em 0;
`;
