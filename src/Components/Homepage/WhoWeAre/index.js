/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './presentation.module.css';

function WhoWeAre() {
  return (
    <section className={styles.presentationContainer}>
      <div className={styles.presentationContent}>
        <h2 className={styles.title}>Quienes somos?</h2>
        <p className={styles.infoW}>
          Somos una empresa dedicada al mundo de las criptomonedas, inversiones y NFTs.
        </p>
      </div>
    </section>
  );
}

export default WhoWeAre;
