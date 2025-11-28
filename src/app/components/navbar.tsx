import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';


const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image src="/listlogo.png" alt="Logo" width={32} height={32} />
        <span className={styles.logoText}>List App</span>
      </Link>

      <ul className={styles.navList}>
        <li>
          <Link href="/" className={styles.navLink}>Home</Link>
        </li>
        <li>
          <Link href="/list" className={styles.navLink}>List</Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>About</Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;