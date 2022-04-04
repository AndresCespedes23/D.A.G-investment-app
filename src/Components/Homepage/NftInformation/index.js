/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './nft-info.module.css';

function NftInformation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className={styles.nftContainer}>
      <div className={styles.nftShadowEffect}>
        <h2 className={styles.title} id="nft" data-aos="zoom-in">What are NFTs?</h2>
        <div className={styles.educationNft}>
          <div>
            <div className={styles.educationCard} data-aos="fade-up">
              <Link to="/nft-education/fundamentals">
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/unicornio.png`} alt="fundamentals" />
              </Link>
              <h2 className={styles.cardTitle}>Fundamentals</h2>
            </div>
            <div className={styles.educationCard} data-aos="fade-up">
              <Link to="/nft-education/ownership">
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/llave.png`} alt="ownership" />
              </Link>
              <h2 className={styles.cardTitle}>Ownership</h2>
            </div>
            <div className={styles.educationCard} data-aos="fade-up">
              <Link to="/nft-education/minting">
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/varita-magica.png`} alt="varita magica" />
              </Link>
              <h2 className={styles.cardTitle}>Minting</h2>
            </div>
          </div>
          <div>
            <div className={styles.educationCard} data-aos="fade-up">
              <Link to="/nft-education/security">
                <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/proteger.png`} alt="security" />
              </Link>
              <h2 className={styles.cardTitle}>Security</h2>
            </div>
            <div className={styles.educationCard} data-aos="fade-up">
              <Link to="/nft-education/use-cases">
                <img
                  className={styles.logo}
                  src={`${process.env.PUBLIC_URL}/assets/img/bombilla.png`}
                  alt="nft use cases"
                />
              </Link>
              <h2 className={styles.cardTitle}>NFTs use cases</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NftInformation;
