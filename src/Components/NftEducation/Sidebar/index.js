/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './navbar.module.css';

function SideBar() {
  return (
    <nav className={styles.navBar}>
      <ol>
        <li>What is an NFT?</li>
        <li>How to Mint a NFT</li>
        <li>Exaples of NTF</li>
      </ol>
    </nav>
  );
}

export default SideBar;
