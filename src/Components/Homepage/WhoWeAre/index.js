/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './presentation.module.css';

function WhoWeAre() {
  return (
    <section className={styles.presentationContainer}>
      <div className={styles.title}>
        <h2>we are a company that do bla bla bla and we invest in bla bla bla</h2>
      </div>
      <div className={styles.calculatorBtn}>
        <button type="button">
          Simulate your inversion
        </button>
      </div>
    </section>
  );
}

export default WhoWeAre;
