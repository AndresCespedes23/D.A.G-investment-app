/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Header from './Header';
import Fundamentals from './Fundamentals';
import Ownership from './Ownership';
import Minting from './Minting';
import Security from './Security';
import NftUseCases from './NftUseCases';
import Footer from '../Shared/Footer';

function NftEducation() {
  return (
    <div>
      <Header />
      <Fundamentals />
      <Ownership />
      <Minting />
      <Security />
      <NftUseCases />
      <Footer />
    </div>
  );
}

export default NftEducation;
