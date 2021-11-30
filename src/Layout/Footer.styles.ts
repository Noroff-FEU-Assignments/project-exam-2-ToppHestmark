import styled from 'styled-components/macro';

export const Container = styled.footer`
  ${({ theme }) => theme.includes.layoutSpacing};
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 6em 0 2em 0;
`;
