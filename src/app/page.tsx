import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to ListApp</h1>
        <p className={styles.description}>
          Manage your lists efficiently and effortlessly.
          <br />
          The simple way to stay organized.
        </p>
      </div>

      <div className={styles.buttons}>
        <Link href="/about" className={`${styles.button} ${styles.primaryButton}`}>
          Learn More
        </Link>
        <Link href="/contact" className={`${styles.button} ${styles.secondaryButton}`}>
          Contact Us
        </Link>
      </div>
    </main>
  );
}