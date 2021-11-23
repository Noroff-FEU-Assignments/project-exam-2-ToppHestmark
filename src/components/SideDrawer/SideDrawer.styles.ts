import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.aside`
  margin-top: 2em;
  display: flex;
  flex-direction: column;

  @media print {
    display: none;
  }
`;

export const AsideLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.navy};
  text-decoration: none;
  font-weight: 300 !important;
  padding: 1em 1.6em;
  width: 260px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
