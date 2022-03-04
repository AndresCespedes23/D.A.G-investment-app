/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.headerContent}>
      <div>
        Company logo
      </div>
      <ul>
        <li>Who we are</li>
        <li>NFT</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Header;
