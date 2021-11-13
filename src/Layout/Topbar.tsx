import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { MenuAdmin } from '../components';
import Logo from '../assets/icons/logo_white.png';

import { NavContainer, LogoWrapper, LinkWrap, Link } from './Topbar.styles';

const TopBar: React.FC = () => {
  const [auth] = useContext<any>(AuthContext);
  const history = useHistory();

  const CustomersMenu = () => (
    <LinkWrap>
      <Link to="/all-properties">Properties</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Sign in</Link>
    </LinkWrap>
  );

  return (
    <NavContainer>
      <LogoWrapper to="/">
        {' '}
        <img src={Logo} alt="Holidaze logo" />{' '}
      </LogoWrapper>

      {auth ? <MenuAdmin /> : <CustomersMenu />}
    </NavContainer>
  );
};

export default TopBar;
