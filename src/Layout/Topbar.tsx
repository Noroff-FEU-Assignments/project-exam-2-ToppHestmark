import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { SideDrawer } from '../components';
import logo from '../assets/icons/logo.png';
import logo_white from '../assets/icons/logo_white.png';

import {
  NavContainer,
  Wrapper,
  LogoWrapper,
  LinkWrap,
  Link,
  MenuButton,
} from './Topbar.styles';

const TopBar: React.FC = () => {
  const [auth, setAuth] = useContext<any>(AuthContext);
  const [asideOpen, setAsideOpen] = useState(false);

  const closeAside = () => setAsideOpen(false);
  const logout = () => setAuth(null);
  const location = useLocation();
  const path = location?.pathname;

  const CustomersMenu = () => (
    <>
      <Link pathname={path} to="/contact">
        Contact
      </Link>
      <Link pathname={path} to="/login">
        Sign in
      </Link>
    </>
  );

  const AdminMenu = () => (
    <>
      <Link pathname={path} to="/add-property">
        Add Property
      </Link>
      <Link pathname={path} to="/bookings">
        Bookings
      </Link>
      <Link pathname={path} to="/messages">
        Messages
      </Link>
      <Link pathname={path} onClick={logout} to="/">
        Sign out
      </Link>
    </>
  );

  return (
    <NavContainer pathname={path}>
      <Wrapper>
        <LogoWrapper to="/">
          {' '}
          <img
            src={path === '/' ? logo_white : logo}
            alt="Holidaze logo"
          />{' '}
        </LogoWrapper>

        <LinkWrap>
          <Link pathname={path} to="/all-properties">
            Properties
          </Link>

          {auth ? <AdminMenu /> : <CustomersMenu />}
        </LinkWrap>
        <MenuButton pathname={path} onClick={() => setAsideOpen(true)} />

        <SideDrawer
          closeAside={closeAside}
          asideOpen={asideOpen}
          setAsideOpen={setAsideOpen}
        />
      </Wrapper>
    </NavContainer>
  );
};

export default TopBar;
