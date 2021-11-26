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
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;
