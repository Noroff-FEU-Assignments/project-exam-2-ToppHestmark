import styled from 'styled-components/macro';

export const Logo = styled.img`
  width: 100px;
  height: auto;
  display: none;

  @media print {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Row = styled.div`
  padding: 1.125em 0 0.25em 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.3px solid ${({ theme }) => theme.colors.border};

  @media screen and (min-width: 992px) {
    padding: 1.25em 0;
  }
`;

export const LastRow = styled(Row)`
  padding: 1em 0;
  margin-bottom: 2em;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navy};
  font-weight: 700;
`;

export const TextLeft = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.875rem;
  }
`;

export const TextRight = styled.p`
  font-size: 1.125rem;
  font-weight: 400;

  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Specifications = styled.div`
  padding: 0.75em 0 1.5em 0;

  div {
    padding: 1em 0;
    font-size: 1.125rem;
  }
`;
