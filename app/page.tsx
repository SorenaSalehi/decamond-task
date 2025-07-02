import styles from "./page.module.css";

import AuthForm from "./_components/auth_components/AuthForm";
import AuthSubmitBtn from "./_components/auth_components/AuthSubmitBtn";

export default function Home() {
    return (
        <div className={styles.page}>
            <h1>خوش آمدید.</h1>
            <AuthForm />
            <AuthSubmitBtn />
        </div>
    );
}
