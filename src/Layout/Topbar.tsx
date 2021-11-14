import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { SideDrawer } from '../components';
import Logo from '../assets/icons/logo_white.png';

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

  const CustomersMenu = () => (
    <>
      <Link to="/all-properties">Properties</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Sign in</Link>
    </>
  );

  const AdminMenu = () => (
    <>
      <Link to="/add-property">Add Property</Link>
      <Link to="/all-properties">Properties</Link>
      <Link to="/bookings">Bookings</Link>
      <Link to="/messages">Messages</Link>
      <Link onClick={logout} to="/">
        Sign out
      </Link>
    </>
  );

  return (
    <NavContainer>
      <Wrapper>
        <LogoWrapper to="/">
          {' '}
          <img src={Logo} alt="Holidaze logo" />{' '}
        </LogoWrapper>

        <LinkWrap>{auth ? <AdminMenu /> : <CustomersMenu />}</LinkWrap>
        <MenuButton onClick={() => setAsideOpen(true)} />

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
