/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  Stars, Text,
} from '@react-three/drei';
import Sphere from './3D/Sphere';
import ThreeScene from './3D/ThreeScene';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import Contact from './Contact';
import Footer from '../Shared/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <div>
        <ThreeScene>
          <Suspense fallback={null}>
            <Text color="#d6b400" fontSize="1">
              Bennu
            </Text>
          </Suspense>

          <Sphere />

          <color attach="background" args={['#090909']} />
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
          <Stars depth={200} />
        </ThreeScene>
        <WhoWeAre />
        <NftInformation />
        <Contact />
        <Footer />
      </div>

    </>

  );
}

export default Homepage;
