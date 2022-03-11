/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import NftBanner from './NftBanner';
import Contact from './Contact';

function Homepage() {
  return (
    <div>
      <Header />
      <WhoWeAre />
      <NftInformation />
      <NftBanner />
      <Contact />
    </div>
  );
}

export default Homepage;
