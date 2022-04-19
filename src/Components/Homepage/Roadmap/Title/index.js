/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './title.module.css';

function Title() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <img className={styles.logo1} src={`${process.env.PUBLIC_URL}/assets/img/balon-de-futbol-frente-al-arco.png`} alt="fulvo" />
        <h2>Roadmap</h2>
        <img className={styles.logo2} src={`${process.env.PUBLIC_URL}/assets/img/balon-de-futbol-frente-al-arco.png`} alt="fulvo" />
      </div>
    </section>

  );
}

export default Title;
