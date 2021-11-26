import styled from 'styled-components/macro';

export const UIWrapper = styled.section`
  grid-gap: 1.625em;
  ${({ theme }) => theme.includes.layoutSpacing};

  @media screen and (min-width: 992px) {
    display: grid;
    justify-content: space-between;
    grid-template-columns: 59% 39%;
  }
`;
