/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './minting.module.css';

function Minting() {
  return (
    <div className={styles.mintingContainer}>
      <div>Minting</div>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/varita-magica.png`} alt="varita magica" />
    </div>
  );
}

export default Minting;
