/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import DecentralizedBackground from '../../Shared/DecentralizedBackground';
import styles from './presentation.module.css';

function WhoWeAre() {
  return (
    <section className={styles.presentationContainer} id="w">
      <div className={styles.presentationContent}>
        <h2 className={styles.title}>WHO WE ARE?</h2>
        <p className={styles.infoW}>
          Somos una empresa dedicada al mundo de las criptomonedas, inversiones y NFTs.
        </p>
      </div>
      <DecentralizedBackground />
    </section>
  );
}

export default WhoWeAre;
