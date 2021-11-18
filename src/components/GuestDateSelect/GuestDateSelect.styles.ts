import styled from 'styled-components/macro';
import { boxShadow } from '../../styles/mixins';
import { Divider } from '@mui/material';

export const Container = styled.div`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};

  ${boxShadow}
`;

export const PriceHead = styled.div`
  display: flex;
  padding: 1.25em 0;

  h3 {
    font-weight: 500;
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.25em;
  }
`;

export const Spacing = styled.div`
  width: 100%;
  padding: 0.5em 0;
`;

export const HrLine = styled.hr`
  border-color: ${({ theme }) => theme.colors.border};
  margin: 1.2em 0;
`;

export const Slash = styled.div`
  font-size: 1.4rem;
  font-weight: 100;
  padding: 0 0.15em;
`;

export const SummaryText = styled.p`
  text-align: end;
  padding: 0.2em 0;
  font-weight: 300;
`;

export const TotalPrice = styled.h4`
  padding: 0 0 1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.25rem;
`;

export const MidText = styled.p`
  padding: 0.5em 0 2em 0;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 300;
`;
