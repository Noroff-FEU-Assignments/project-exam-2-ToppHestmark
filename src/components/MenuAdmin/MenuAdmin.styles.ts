import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export const Container = styled.div`
  z-index: 9;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${({ theme }) => theme.colors.blue_light};
  }
`;

export const Item = styled(MenuItem)`
  width: 260px;
  padding: 18px !important;
`;

export const MenuButton = styled(Button)`
  color: ${({ theme }) => theme.colors.white} !important;
  text-transform: none !important;
  margin: 1em 0 !important;

  &:hover {
    opacity: 0.85;
  }
`;
