import Link from "next/link"
import styles from "./Layout.module.css"
export default function Layout({ children }) {
    return (
        <>
            <header className={styles.header}>
              <Link href={"/"}>
              <h1 className={styles.text}>
                    CarBaam
                </h1>
                <p className={styles.text2}>
                    Choose And Buy Your car
                </p>
              </Link>
            </header>
            <div className={styles.container}>
            {children}
            </div>
            <footer className={styles.footer}>
                <span className={styles.foot_span}>next js practice</span>CarBaam project &copy;
            </footer>
        </>
    )
}
