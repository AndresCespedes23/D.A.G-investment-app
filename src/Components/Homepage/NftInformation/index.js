/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nft-info.module.css';

function NftInformation() {
  return (
    <section className={styles.nftContainer} id="nft">
      <div className={styles.nftShadowEffect}>
        <h2 className={styles.title}>What are NFTs?</h2>
        <Link to="/nft-education/fundamentals">
          <div className={styles.educationCard}>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/unicornio.png`} alt="fundamentals" />
            <h2>Fundamentals</h2>
          </div>
        </Link>
        <Link to="/nft-education/ownership">
          <div className={styles.educationCard}>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/llave.png`} alt="ownership" />
            <h2>Ownership</h2>
          </div>
        </Link>
        <Link to="/nft-education/minting">
          <div className={styles.educationCard}>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/varita-magica.png`} alt="varita magica" />
            <h2>Minting</h2>
          </div>
        </Link>
        <Link to="/nft-education/security">
          <div className={styles.educationCard}>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/proteger.png`} alt="security" />
            <h2>Security</h2>
          </div>
        </Link>
        <Link to="/nft-education/use-cases">
          <div className={styles.educationCard}>
            <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bombilla.png`} alt="nft use cases" />
            <h2>NFTs use cases</h2>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default NftInformation;
