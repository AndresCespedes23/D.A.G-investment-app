/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './navbar.module.css';

function SideBar() {
  return (
    <div className={styles.navBar}>
      <ol>
        <li>What is an NFT?</li>
        <li>How to Mint a NFT</li>
        <li>Exaples of NTF</li>
      </ol>
    </div>
  );
}

export default SideBar;
