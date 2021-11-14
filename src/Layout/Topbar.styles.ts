import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

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

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 300 !important;

  &:hover {
    opacity: 0.85;
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

  @media screen and (max-width: 768px) {
    img {
      width: 100px;
    }
  }
`;

export const MenuButton = styled(MenuIcon)`
  margin: 0.8em 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    display: none !important;
  }
`;
