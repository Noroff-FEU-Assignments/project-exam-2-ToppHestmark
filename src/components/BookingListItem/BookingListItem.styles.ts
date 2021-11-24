import styled from 'styled-components/macro';
import { ButtonPrimary } from '../../styles/Button/Button.styles';

export const Wrapper = styled.div`
  padding: 2em 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: start;
  }
`;

export const Title = styled.h3`
  padding: 0.2em 0;
  font-weight: 500;
  font-size: 1.625rem;
`;

export const BookingId = styled.h3`
  padding: 0.2em 0;
  font-weight: 500;
  font-size: 1rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const RowText = styled.p`
  font-size: 1.0125rem;
  font-weight: 400;
  padding: 0 0.4em 0 0;
`;

export const Button = styled(ButtonPrimary)`
  margin: 1em 0 0 0;
`;
