import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

interface IPathnameProps {
  pathname: string;
}

export const NavContainer = styled.nav<IPathnameProps>`
  width: 100%;
  z-index: 9;
  position: sticky;
  background-color: ${({ theme, pathname }) =>
    pathname === '/' ? theme.colors.dark : 'transparent'};
  box-shadow: 4px 3px 13px -6px rgba(0, 0, 0, 0.14);
  -webkit-box-shadow: 4px 3px 13px -6px rgba(0, 0, 0, 0.14);
  -moz-box-shadow: 4px 3px 13px -6px rgba(0, 0, 0, 0.14);

  @media print {
    display: none;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;

  ${({ theme }) => theme.includes.layoutSpacing};
  padding: 1em 2em;

  @media (max-width: 768px) {
    padding: 1em 2em;
  }
  @media (max-width: 480px) {
    padding: 1em;
  }
`;

export const LinkWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const Link = styled(NavLink)<IPathnameProps>`
  padding: 8px 0;
  margin: 0 8px;
  color: ${({ theme, pathname }) =>
    pathname === '/' ? theme.colors.white : theme.colors.navy};
  text-decoration: none;
  font-weight: 300 !important;
  font-size: 1.125rem;

  &:hover {
    opacity: 0.85;
  }
`;

export const LogoWrapper = styled(NavLink)`
  margin-right: auto;
  display: grid;
  align-items: center;

  &:hover {
    opacity: 0.85;
  }

  img {
    width: 120px;
    margin-left: -0.4em;
  }

  @media screen and (max-width: 992px) {
    img {
      width: 100px;
      margin-left: -0.3em;
    }
  }
`;

export const MenuButton = styled(MenuIcon)<IPathnameProps>`
  cursor: pointer;
  color: ${({ theme, pathname }) =>
    pathname === '/' ? theme.colors.white : theme.colors.navy};
  scale: 1.4;

  &:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 992px) {
    display: none !important;
  }
`;
