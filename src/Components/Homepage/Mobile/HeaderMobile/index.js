/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './header-mobile.module.css';

function HeaderMobile() {
  return (
    <div className={styles.container} id="home">
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-header.png`} alt="bennu logo" />
    </div>
  );
}

export default HeaderMobile;
