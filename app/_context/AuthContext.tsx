"use client";

import { useRouter } from "next/navigation";
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";
import { AuthContextType } from "../_types/auth";
import { RandomUser } from "../_types/user";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthContextProvider({ children }: { children: ReactNode }) {
    const router = useRouter();

    const [isAuth, setIsAuth] = useState<boolean>(false);

    // random user btn
    const [user, setUser] = useState<RandomUser | null>(null);
    const [isRandomUserLoading, setIsRandomUserLoading] =
        useState<boolean>(false);
    const [fetchUserError, setFetchUserError] = useState<string | null>(null);

    // phone number input
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [phoneNumberError, setPhoneNumberError] = useState<string | null>("");
    const [isValid, setIsValid] = useState<boolean>(false);

    console.log(user);

    useEffect(() => {
        const storedUser = localStorage.getItem("random_user");

        if (storedUser) {
            const data: RandomUser = JSON.parse(storedUser);
            setUser(data);
            setIsAuth(true);
            router.push("/dashboard");
        }

        if (!storedUser) {
            router.push("/auth");
        }
    }, [router]);

    const ctx = {
        // random user btn
        isAuth,
        setIsAuth,
        user,
        setUser,
        isRandomUserLoading,
        setIsRandomUserLoading,
        fetchUserError,
        setFetchUserError,

        // phone number input
        phoneNumber,
        setPhoneNumber,
        phoneNumberError,
        setPhoneNumberError,
        isValid,
        setIsValid,
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
