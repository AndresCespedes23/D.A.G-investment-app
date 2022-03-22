/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../Shared/Button';
import styles from './nft-info.module.css';

function NftInformation() {
  return (
    <section className={styles.nftContainer} id="nft">
      <div className={styles.nftShadowEffect}>
        <h2 className={styles.title}>What are NFTs?</h2>
        <div className={styles.nftBtn}>
          <Link to="/nft-information">
            <Button type="more" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NftInformation;
