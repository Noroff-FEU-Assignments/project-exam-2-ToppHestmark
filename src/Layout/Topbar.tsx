import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { MenuAdmin } from '../components';
import Logo from '../assets/icons/logo_white.png';

import {
  NavContainer,
  LogoWrapper,
  LinkWrap,
  Link,
  MenuButton,
  AsideLink,
} from './Topbar.styles';
import { Drawer } from '@mui/material';

const TopBar: React.FC = () => {
  const [auth] = useContext<any>(AuthContext);
  const [asideOpen, setAsideOpen] = useState(false);

  const closeAside = () => setAsideOpen(false);

  const CustomersMenu = () => (
    <>
      <LinkWrap>
        <Link to="/all-properties">Properties</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Sign in</Link>
      </LinkWrap>
      <MenuButton onClick={() => setAsideOpen(true)} />
    </>
  );

  return (
    <NavContainer>
      <LogoWrapper to="/">
        {' '}
        <img src={Logo} alt="Holidaze logo" />{' '}
      </LogoWrapper>

      {auth ? <MenuAdmin /> : <CustomersMenu />}

      <Drawer
        anchor="right"
        open={asideOpen}
        onClose={() => setAsideOpen(false)}
      >
        <AsideLink onClick={closeAside} to="/all-properties">
          Properties
        </AsideLink>
        <AsideLink onClick={closeAside} to="/contact">
          Contact
        </AsideLink>
        <AsideLink onClick={closeAside} to="/login">
          Sign in
        </AsideLink>
      </Drawer>
    </NavContainer>
  );
};

export default TopBar;
