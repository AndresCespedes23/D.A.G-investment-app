/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import WhoWeAre from './WhoWeAre';
import Calculator from './Calculator';
import NftInformation from './NftInformation';
import NftBanner from './NftBanner';
import Contact from './Contact';

function Homepage() {
  return (
    <div>
      <WhoWeAre />
      <Calculator />
      <NftInformation />
      <NftBanner />
      <Contact />
    </div>
  );
}

export default Homepage;
