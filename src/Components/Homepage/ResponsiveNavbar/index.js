/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './responsive-navbar.module.css';
import Button from '../../Shared/Button';

function ResponsiveNavbar() {
  return (
    <div className={styles.navbarContainer}>
      <Button type="close" />
      <ul className={styles.navLinks}>
        <li>Who we are</li>
        <li>NFT</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default ResponsiveNavbar;
