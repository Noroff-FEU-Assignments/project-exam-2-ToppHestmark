import { useState, useEffect, useContext, useRef } from 'react';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { AuthContext } from '../../context/AuthProvider';

import { Container, Link, Item, MenuButton } from './MenuAdmin.styles';

const MenuAdmin = () => {
  const [auth, setAuth] = useContext<any>(AuthContext);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<any>(null);

  const handleToggleDashboard = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;

    setOpen(false);
  };

  const logout = (event: Event | React.SyntheticEvent) => {
    setAuth(null);
    handleClose(event);
  };

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row">
      <Container>
        <MenuButton
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggleDashboard}
        >
          {auth?.user.username}
        </MenuButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                  >
                    <Link to="/add-property">
                      <Item onClick={handleClose}>Add Property</Item>
                    </Link>
                    <Link to="/all-properties">
                      <Item onClick={handleClose}>All Properties</Item>
                    </Link>
                    <Link to="/bookings">
                      <Item onClick={handleClose}>Bookings</Item>
                    </Link>
                    <Link to="/messages">
                      <Item onClick={handleClose}>Messages</Item>
                    </Link>
                    <Link to="/">
                      <Item onClick={logout}>Logout</Item>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Container>
    </Stack>
  );
};

export default MenuAdmin;
