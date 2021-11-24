import styled from 'styled-components/macro';
import { ButtonPrimaryLink } from '../../styles/Button/Button.styles';

export const Wrapper = styled.section`
  max-width: 750px;
  margin: 2em auto;
  border-radius: ${({ theme }) => theme.borderRadius};

  @media (min-width: 768px) {
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
