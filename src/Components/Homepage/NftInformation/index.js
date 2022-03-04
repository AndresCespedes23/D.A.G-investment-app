/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './nft-info.module.css';

function NftInformation() {
  return (
    <section>
      <div className={styles.title}>
        <h2>NFTs are a bla bla bla</h2>
      </div>
      <div className={styles.nftBtn}>
        <button type="button">
          See more
        </button>
      </div>
    </section>
  );
}

export default NftInformation;
