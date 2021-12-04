import { User } from "firebase";
import { FC, createContext, useState, useEffect } from "react";

type AuthContextProps = {
  currentUser: User | null | undefined
}

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });

const AuthProvider: FC = ({ children }) => {
  const [ currentUser, setCurrentUser ] = useState<User | null | undefined>(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
