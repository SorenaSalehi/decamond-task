"use client";

import { useAuthContext } from "@/app/_context/AuthContext";
import styles from "./styles/AuthForm.module.scss";

export default function AuthForm() {
    const {
        phoneNumber,
        setPhoneNumber,
        phoneNumberError,
        setPhoneNumberError,
        setIsValid,
    } = useAuthContext();

    const validateIranianPhone = (number: string) => {
        const regex =
            /^(?:(?:09[1-9]\d{8})|(?:\+989[1-9]\d{8})|(?:00989[1-9]\d{8})|(?:9[1-9]\d{8}))$/;
        return regex.test(number);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPhoneNumber(value);

        if (validateIranianPhone(value)) {
            setPhoneNumberError(null);
            setIsValid(true);
        } else {
            setPhoneNumberError(value ? "شماره تلفن معتبر نیست" : null);
            setIsValid(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <form className={styles.form}>
                <div className={styles.inputGroup}>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="09** - *** - ****"
                        className={`${styles.input} ${
                            phoneNumberError ? styles.errorInput : ""
                        }`}
                        maxLength={11}
                    />
                    {phoneNumberError && (
                        <p className={styles.errorMessage}>
                            {phoneNumberError}
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
