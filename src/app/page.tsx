import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className={styles.main}>
    <h1 className={styles.title}>Welcome to ListApp</h1>
    <p className={styles.description}>
      Manage your lists efficiently and effortlessly.
    </p>
    </div>
  );
}