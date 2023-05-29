import { createContext, ReactNode } from 'react';
import { useLocalStorage } from '../app/hooks';

type UserContextType = {
  user: string,
  setUser: (val: string) => void,
};

export const UserContext = createContext<UserContextType>({
  user: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
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
