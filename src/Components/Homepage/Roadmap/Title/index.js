/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './title.module.css';

function Title() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <img src={`${process.env.PUBLIC_URL}/assets/img/distance.png`} alt="roadmap" />
        <h2>Roadmap</h2>
      </div>
    </section>

  );
}

export default Title;
