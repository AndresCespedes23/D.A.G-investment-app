/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import DecentralizeddBackground from '../DecentralizedBackground';
import styles from './footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.blockchain}>
        <DecentralizeddBackground />
      </div>
      <div className={styles.footerContainer}>
        <Link to="/">
          <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-icon.png`} alt="bennu logo" />
        </Link>
        <p className={styles.copyright}>
          ©2022 Bennu
        </p>
      </div>

    </>
  );
}

export default Footer;
