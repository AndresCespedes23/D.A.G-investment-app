/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './homepage.module.css';
import WhoWeAre from './WhoWeAre';
import Calculator from './Calculator';
import NftInformation from './NftInformation';
import NftBanner from './NftBanner';
import Contact from './Contact';

function Homepage() {
  return (
    <div className={styles.background}>
      <header>
        <div className={styles.headerContent}>
          <div>Company logo</div>
          <div className={styles.navLinks}>
            <div>WHO WE ARE</div>
            <div>NFT</div>
            <div>CONTACT</div>
            <div>LOGIN</div>
          </div>
        </div>
      </header>
      <WhoWeAre />
      <Calculator />
      <NftInformation />
      <NftBanner />
      <Contact />
    </div>
  );
}

export default Homepage;
