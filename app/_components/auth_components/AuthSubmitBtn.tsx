"use client";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/app/_context/AuthContext";
import styles from "./styles/AuthSubmitBtn.module.scss";

export default function AuthSubmitBtn() {
    const router = useRouter();
    const {
        isRandomUserLoading,
        setIsRandomUserLoading,
        setFetchUserError,
        setUser,
        isValid,
    } = useAuthContext();

    const getRandomUser = async () => {
        setIsRandomUserLoading(true);
        setFetchUserError(null);

        try {
            const response = await fetch(
                "https://randomuser.me/api/?results=1&nat=us"
            );
            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "خطا در دریافت اطلاعات!! لطفا اینترنت خود را بررسی کنید و مجددا تلاش کنید."
                );
            }
            const fetchedUser = data?.results[0];
            setUser(fetchedUser);
            localStorage.setItem("random_user", JSON.stringify(fetchedUser));
            router.push("/dashboard");
        } catch (err) {
            setFetchUserError(
                err instanceof Error ? err.message : "🤔خطای ناشناخته"
            );
        } finally {
            setIsRandomUserLoading(false);
        }
    };

    return (
        <button
            type="button"
            onClick={getRandomUser}
            disabled={!isValid || isRandomUserLoading}
            className={`${styles.submitBtn} ${
                !isValid
                    ? styles.disabledButton
                    : isRandomUserLoading
                    ? styles.loading
                    : ""
            }`}
        >
            {isRandomUserLoading ? (
                <span className={styles.spinner}></span>
            ) : (
                "ورود به پنل کاربری"
            )}
        </button>
    );
}
