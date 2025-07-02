import { Dispatch, SetStateAction } from "react";

export type AuthContextType = {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;

    user: undefined;
    setUser: Dispatch<SetStateAction<undefined>>;

    isRandomUserLoading: boolean;
    setIsRandomUserLoading: Dispatch<SetStateAction<boolean>>;

    error: string | null;
    setError: Dispatch<SetStateAction<string | null>>;
};
