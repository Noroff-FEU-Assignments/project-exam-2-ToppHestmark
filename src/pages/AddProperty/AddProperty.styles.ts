import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const Container = styled.div`
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const Form = styled(FormGroup)`
  max-width: 1400px;
  margin: 2em auto;

  @media screen and (min-width: 992px) {
    padding: 3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Button = styled(ButtonPrimary)`
  margin: 2em auto 0 auto;
  min-width: 300px;
`;
