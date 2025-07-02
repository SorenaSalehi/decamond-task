import styles from "./AuthForm.module.scss";

import AuthForm from "../_components/auth_components/AuthForm";
import AuthSubmitBtn from "../_components/auth_components/AuthSubmitBtn";

export default function page() {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>خوش آمدید</h1>
            <AuthForm />
            <AuthSubmitBtn />
        </div>
    );
}
