import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const AuthContext = createContext([null, () => {}]);

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useLocalStorage<any>('auth', null);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
