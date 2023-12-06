// components/Navbar.js
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Style.module.scss';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${menuOpen ? styles.navbarOpen : ''}`}>
      <div className={`${styles.menuIcon} ${menuOpen ? styles.showMenu : ''}`} onClick={toggleMenu}>
        <div className={styles.iconLine}></div>
        <div className={styles.iconLine}></div>
        <div className={styles.iconLine}></div>
      </div>

      <div className={`${styles.menu} ${menuOpen ? styles.showMenu : ''}`}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
