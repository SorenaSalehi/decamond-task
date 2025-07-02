"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { AuthContextType } from "../_types/auth";
import { log } from "console";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthContextProvider({ children }: { children: ReactNode }) {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [user, setUser] = useState<undefined>();
    const [isRandomUserLoading, setIsRandomUserLoading] =
        useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    console.log(user);

    const ctx = {
        isAuth,
        setIsAuth,
        user,
        setUser,
        isRandomUserLoading,
        setIsRandomUserLoading,
        error,
        setError,
    };
    return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
}

function useAuthContext() {
    const context = useContext(AuthContext);

    if (!context)
        throw new Error("Auth context was used outside the provider!!");

    return context;
}

export { AuthContextProvider, useAuthContext };
