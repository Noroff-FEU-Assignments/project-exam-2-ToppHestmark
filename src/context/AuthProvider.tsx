import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext([null, () => {}]);

const AuthProvider: React.FC<IAuthProvider> = ({ children }: any) => {
  const [auth, setAuth] = useLocalStorage<any>('auth', null);

  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
