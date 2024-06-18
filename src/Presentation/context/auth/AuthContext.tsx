import { createContext } from "react";

type AuthContextProps = {
    user: any;
    staus: 'checking' | 'authenticated' | 'not-authenticated';
}



export const AuthContext = createContext({} as AuthContextProps);
