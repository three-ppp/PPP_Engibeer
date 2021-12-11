import { User } from 'firebase';
import { FC, createContext, useState } from 'react';
import type { User } from "types/types";


//import firebase from '../utils/Firebase';

const AuthContext = createContext<User>({ 
    currentUser: null,
    setCurrentUser: () => {}
});

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null >({});

  /* 下階層のコンポーネントをラップする */
    return (
        <AuthContext.Provider value={{ currentUser: currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

const useUserContext = () => useContext(AuthContext)

export { useUserContext, AuthProvider }