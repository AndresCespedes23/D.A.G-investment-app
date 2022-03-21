/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './fundamentals.module.css';

function Fundamentals() {
  return (
    <div className={styles.fundamentalsContainer}>
      <div className={styles.title}>Fundamentals</div>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/unicornio.png`} alt="unicornio" />
    </div>

  );
}

export default Fundamentals;
