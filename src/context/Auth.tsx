import { FC, createContext, useEffect, useState } from 'react';
import { AuthUser } from "src/types/types";
import firebase from "firebase/app";
import { auth, db } from "../firebase";


const AuthContext = createContext<AuthUser>({ 
    currentUser: null,
});

const AuthProvider: FC = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<AuthUser | null >({});

    useEffect(() => {
        // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
        auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        })
    }, []);

  /* 下階層のコンポーネントをラップする */
    return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, AuthContext }