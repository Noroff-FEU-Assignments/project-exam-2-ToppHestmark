import styled from 'styled-components/macro';

export const Container = styled.section`
  ${({ theme }) => theme.includes.layoutSpacing};

  @media screen and (min-width: 992px) {
    width: 900px;
  }
`;

export const Wrapper = styled.div`
  padding: 2em 0 0 0;
`;
