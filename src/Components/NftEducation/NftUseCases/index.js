/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './nft-use.module.css';

function NftUseCases() {
  return (
    <div className={styles.nftUseContainer}>
      <div>Nft Use Cases</div>
      <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bombilla.png`} alt="bombilla" />
    </div>
  );
}

export default NftUseCases;
