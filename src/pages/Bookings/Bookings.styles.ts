import styled from 'styled-components/macro';

export const Container = styled.section`
  margin: 0 auto;
  ${({ theme }) => theme.includes.layoutSpacing};

  @media screen and (min-width: 992px) {
    width: 900px;
  }
`;

export const Wrapper = styled.div`
  padding: 1em 0;
`;
