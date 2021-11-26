import styled from 'styled-components/macro';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const Wrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.includes.layoutSpacing};
  max-width: 1400px;

  @media (min-width: 768px) {
    padding: 3em;
    border: 1px solid ${({ theme }) => theme.colors.border};
    margin: 2em auto;
  }
`;

export const Button = styled(ButtonPrimary)`
  width: 100%;
`;
