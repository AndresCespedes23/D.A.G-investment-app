/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import Footer from '../Shared/Footer';
import styles from './homepage.module.css';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.homeContainer}>
        <Header />
        <WhoWeAre />
        <Footer />

      </div>
    </div>
  );
}

export default Homepage;
