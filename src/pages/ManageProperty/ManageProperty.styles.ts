import { flexCenter } from './../../styles/mixins';
import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const FormContainer = styled(FormGroup)`
  ${({ theme }) => theme.includes.layoutSpacing};

  @media screen and (min-width: 992px) {
    margin: 2em auto;
    max-width: 1400px;
    padding: 3em;
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ theme }) => theme.includes.boxShadow};
  }
`;

export const Button = styled(ButtonPrimary)`
  padding-left: 4em;
  padding-right: 4em;
`;

export const BtnWrapper = styled.div`
  margin: 2em 0;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    row-gap: 1.5em;
  }
`;
