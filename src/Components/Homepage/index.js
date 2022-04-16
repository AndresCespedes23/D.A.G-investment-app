/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import Footer from '../Shared/Footer';
import styles from './homepage.module.css';
import MobileNavBar from './MobileNavBar';

function Homepage() {
  return (
    <div className={styles.homepage}>

      <WhoWeAre />
      <Header />
      <Roadmap />
      <FAQ />
      <Footer />
      <MobileNavBar />

    </div>
  );
}

export default Homepage;
