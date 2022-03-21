/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './security.module.css';

function Security() {
  return (
    <div className={styles.securityContainer}>
      <div>Security</div>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/proteger.png`} alt="proteger" />
    </div>
  );
}

export default Security;
