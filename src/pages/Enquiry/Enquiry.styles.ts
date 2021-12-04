import styled from 'styled-components/macro';
import { FormGroup } from '@mui/material';

export const FormContainer = styled(FormGroup)`
  max-width: 750px;
  margin: 3em auto;
  padding: 1em;
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.includes.boxShadow}

  @media (min-width: 768px) {
    padding: 2em;
  }

  @media (max-width: 768px) {
    margin: 3em 1em;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  text-align: center;
`;

export const Text = styled.p`
  padding: 0.5em 0 2em 0;
  font-weight: 300;
  font-size: 0.875rem;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  padding-top: 1em;
  display: flex;
  justify-content: space-between;
  gap: 1em;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 3em;
  }
`;
