import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';

import styled from 'styled-components';

const Wrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 8px;
  color: ${({ theme }) => theme.colors.navy};
  background-color: ${({ theme }) => theme.colors.white};
  text-decoration: none;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${({ theme }) => theme.colors.blue_light};
  }
`;

const TopBar: React.FC = () => {
  const [auth, setAuth] = useContext<any>(AuthContext);
  const history = useHistory();

  const logout = () => {
    setAuth(null);
    history.push('/');
  };

  return (
    <Wrapper>
      <Link to="/">Holidaze</Link>

      {auth ? (
        <>
          <Link to="/add-property">Add Property</Link>
          <Link onClick={logout} to="/">
            Log out
          </Link>
        </>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </Wrapper>
  );
};

export default TopBar;
