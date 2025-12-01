"use client";

import React from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {

  const { theme, toggleTheme } = useTheme();

  return (

    <nav className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
      <Link href="/" className={styles.logo}>
        <Image src={theme === 'dark' ? "/listlogodark.png" : "/listlogolight.png"} alt="Logo" width={40} height={40} />


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
        <li>
          <button 
            onClick={toggleTheme}
            className={styles.themeToggle}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;