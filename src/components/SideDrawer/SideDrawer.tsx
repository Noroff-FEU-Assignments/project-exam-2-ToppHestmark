import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Drawer } from '@mui/material';
import { AsideLink } from './SideDrawer.styles';

interface ISideDrawer {
  closeAside: () => void;
  setAsideOpen: (e) => void;
  asideOpen: boolean;
}

const SideDrawer = (props: ISideDrawer) => {
  const { closeAside, asideOpen, setAsideOpen } = props;
  const [auth, setAuth] = useContext<any>(AuthContext);

  const logout = () => {
    setAuth(null);
    setAsideOpen(false);
  };

  const CustomerMenu = () => (
    <>
      <AsideLink onClick={closeAside} to="/all-properties">
        Properties
      </AsideLink>
      <AsideLink onClick={closeAside} to="/contact">
        Contact
      </AsideLink>
      <AsideLink onClick={closeAside} to="/login">
        Sign in
      </AsideLink>
    </>
  );

  const AdminMenu = () => (
    <>
      <AsideLink onClick={closeAside} to="/add-property">
        Add Property
      </AsideLink>
      <AsideLink onClick={closeAside} to="/all-properties">
        Properties
      </AsideLink>
      <AsideLink onClick={closeAside} to="/bookings">
        Bookings
      </AsideLink>
      <AsideLink onClick={closeAside} to="/messages">
        Messages
      </AsideLink>
      <AsideLink onClick={logout} to="/">
        Sign out
      </AsideLink>
    </>
  );

  return (
    <Drawer anchor="right" open={asideOpen} onClose={() => setAsideOpen(false)}>
      {auth ? <AdminMenu /> : <CustomerMenu />}
    </Drawer>
  );
};

export default SideDrawer;
