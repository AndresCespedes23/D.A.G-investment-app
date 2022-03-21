/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import NftBanner from './NftBanner';
import Contact from './Contact';
import Footer from '../Shared/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <WhoWeAre />
      <NftInformation />
      <NftBanner />
      <Contact />
      <Footer />
    </>

  );
}

export default Homepage;
