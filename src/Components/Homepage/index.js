/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Stars } from '@react-three/drei';
import ThreeScene from './3D/ThreeScene';
import Sphere from './3D/Sphere';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import Contact from './Contact';
import Footer from '../Shared/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <div style={{ height: '100vh', overflow: 'hidden' }}>
        <ThreeScene>
          <color attach="background" args={['#090909']} />
          <Sphere />
          <ambientLight />
          <Stars depth={200} />
        </ThreeScene>
      </div>
      <WhoWeAre />
      <NftInformation />
      <Contact />
      <Footer />
    </>

  );
}

export default Homepage;
