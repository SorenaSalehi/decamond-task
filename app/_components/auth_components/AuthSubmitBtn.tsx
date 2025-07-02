"use client";

import { useAuthContext } from "@/app/_context/AuthContext";
import styles from "./styles/AuthSubmitBtn.module.scss";

export default function AuthSubmitBtn() {
    const { isRandomUserLoading, setIsRandomUserLoading, setError, setUser } =
        useAuthContext();

    const getRandomUser = async () => {
        console.log("start");
        setIsRandomUserLoading(true);
        setError(null);

        try {
            console.log("try");

            // فراخوانی API شما برای دریافت کاربر تصادفی
            const response = await fetch(
                "https://randomuser.me/api/?results=1&nat=us"
            );
            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "خطا در دریافت اطلاعات!! لطفا اینترنت خود را بررسی کنید و مجددا تلاش کنید."
                );
            }

            setUser(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : "🤔خطای ناشناخته");
        } finally {
            setIsRandomUserLoading(false);
        }
    };

    return (
        <button
            onClick={getRandomUser}
            disabled={isRandomUserLoading}
            className={`${styles.submitBtn} ${
                isRandomUserLoading ? styles.loading : ""
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
