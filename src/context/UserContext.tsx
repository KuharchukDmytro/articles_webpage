import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../app/hooks';

type UserContextType = {
  user: string,
  setUser: (val: string) => void,
};

export const UserContext = createContext<UserContextType>({
  user: '',
  setUser: () => undefined,
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({
  children,
}: UserProviderProps) => {
  const [
    user,
    setUser,
  ] = useLocalStorage<string>('user', '');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
};
