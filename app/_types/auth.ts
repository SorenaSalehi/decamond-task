import { Dispatch, SetStateAction } from "react";
import { RandomUser } from "./user";

export type AuthContextType = {
    isAuth: boolean;
    setIsAuth: Dispatch<SetStateAction<boolean>>;

    user: RandomUser | null;
    setUser: Dispatch<SetStateAction<RandomUser | null>>;
    isRandomUserLoading: boolean;
    setIsRandomUserLoading: Dispatch<SetStateAction<boolean>>;
    fetchUserError: string | null;
    setFetchUserError: Dispatch<SetStateAction<string | null>>;

    phoneNumber: string;
    setPhoneNumber: Dispatch<SetStateAction<string>>;
    phoneNumberError: string | null;
    setPhoneNumberError: Dispatch<SetStateAction<string | null>>;
    isValid: boolean;
    setIsValid: Dispatch<SetStateAction<boolean>>;
};
