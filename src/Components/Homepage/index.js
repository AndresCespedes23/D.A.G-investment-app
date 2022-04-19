/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import Gallery from './Gallery';
import Roadmap from './Roadmap';
import FAQ from './FAQ';
import Footer from '../Shared/Footer';
import MobileNavBar from './Mobile/MobileNavBar';
import HeaderMobile from './Mobile/HeaderMobile';
import Loading from '../Shared/Loading';
import styles from './homepage.module.css';

function Homepage() {
  return (
    <div className={styles.homepage}>

      <HeaderMobile />
      <Header />
      <WhoWeAre />
      <Gallery />
      <Roadmap />
      <FAQ />
      <Footer />
      <MobileNavBar />
      <Loading />

    </div>
  );
}

export default Homepage;
