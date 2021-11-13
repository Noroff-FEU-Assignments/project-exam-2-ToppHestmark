import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  width: 100%;
  height: 8vh;
  padding: 0 1em;
  display: flex;
  justify-content: center;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LinkWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`;

export const LogoWrapper = styled(NavLink)`
  margin-right: auto;
  display: grid;
  align-items: center;

  img {
    width: 120px;
  }

  &:hover {
    opacity: 0.85;
  }
`;
