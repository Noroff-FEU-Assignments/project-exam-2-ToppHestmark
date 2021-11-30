import styled from 'styled-components/macro';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const Wrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.includes.layoutSpacing};
  max-width: 800px;
  margin: 2em auto;

  @media (min-width: 768px) {
    padding: 3em;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Button = styled(ButtonPrimary)`
  min-width: 200px;
  max-width: 220px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
