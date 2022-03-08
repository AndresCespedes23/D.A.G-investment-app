/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './header.module.css';
import Button from '../../Shared/Button';

function Header() {
  return (
    <header className={styles.headerContent}>
      <div>
        Company logo
      </div>
      <Button type="bars" />
      <nav className={styles.navLinks}>
        <ul>
          <li>Who we are</li>
          <li>NFT</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
