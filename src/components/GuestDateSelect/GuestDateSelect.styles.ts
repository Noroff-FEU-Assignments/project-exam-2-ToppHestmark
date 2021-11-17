import styled from 'styled-components/macro';
import { boxShadow } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  padding: 1.5em;
  display: flex;
  flex-direction: column;

  ${boxShadow}
`;

export const PriceHead = styled.div`
  display: flex;
  padding: 1.25em 0;

  h3 {
    font-weight: 500;
  }

  p {
    margin-top: 0.1em;
  }
`;

export const Spacing = styled.div`
  width: 100%;
  padding: 0.5em 0;
`;

export const Slash = styled.div`
  font-size: 1.4rem;
  font-weight: 100;
  padding: 0 0.15em;
  margin-top: -0.1em;
`;

export const TotalPrice = styled.h4`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;
