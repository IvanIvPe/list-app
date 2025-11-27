import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div>
    <h1 className={styles.title}>Welcome to ListApp</h1>
    <p className={styles.description}>
      This is the home page of your ListApp application.
    </p>
    </div>
  );
}
