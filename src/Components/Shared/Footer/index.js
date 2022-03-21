/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}bennu-icon.png`} alt="bennu logo" />
      <p className={styles.copyright}>
        ©2022 Bennu
      </p>
    </div>
  );
}

export default Footer;
