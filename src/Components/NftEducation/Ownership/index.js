/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './ownership.module.css';

function Ownership() {
  return (
    <div className={styles.ownershipContainer}>
      <div>
        Ownership
      </div>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/llave.png`} alt="llave" />
    </div>
  );
}

export default Ownership;
