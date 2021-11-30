import styled from 'styled-components/macro';
import { ButtonPrimaryLink } from '../../styles/Button/Button.styles';

export const Wrapper = styled.section`
  border-radius: ${({ theme }) => theme.borderRadius};
  ${({ theme }) => theme.includes.layoutSpacing};
  max-width: 800px;

  @media (min-width: 992px) {
    margin: 2em auto;
    padding: 3em;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.25em;
`;

export const MailLink = styled(ButtonPrimaryLink)`
  text-align: center;
`;
