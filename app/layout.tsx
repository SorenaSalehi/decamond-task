import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

import styles from "./Home.module.scss";
import { AuthContextProvider } from "./_context/AuthContext";

export const metadata: Metadata = {
    title: "Reza salehi task",
    description: "A task from Decamond Co.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <AuthContextProvider>
                    <header className={styles.siteHeader}>
                        <nav className={styles.siteNav}>
                            <Link href="/dashboard" className={styles.siteItem}>
                                داشبورد
                            </Link>
                            <Link href="/auth" className={styles.siteItem}>
                                ورود
                            </Link>
                            <Link href="/" className={styles.siteItem}>
                                خانه
                            </Link>{" "}
                        </nav>
                    </header>
                    <main className={styles.siteMain}>{children}</main>
                </AuthContextProvider>
            </body>
        </html>
    );
}
