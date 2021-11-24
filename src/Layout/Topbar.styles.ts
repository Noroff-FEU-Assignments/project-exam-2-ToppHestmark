import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

interface INavContainer {
  pathname: string;
}

export const NavContainer = styled.nav<INavContainer>`
  width: 100%;
  z-index: 9;
  position: sticky;
  background-color: ${({ theme, pathname }) =>
    pathname === '/' ? 'transparent' : theme.colors.primary};

  @media print {
    display: none;
  }
`;

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1em;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 884px) {
    padding: 1em;
  }
`;

export const LinkWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 884px) {
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

  @media screen and (max-width: 884px) {
    img {
      width: 100px;
    }
  }
`;

export const MenuButton = styled(MenuIcon)`
  margin: 0.8em 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  scale: 1.4;

  &:hover {
    opacity: 0.85;
  }

  @media screen and (min-width: 884px) {
    display: none !important;
  }
`;
