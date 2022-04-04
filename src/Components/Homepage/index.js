/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  Stars,
} from '@react-three/drei';
import Boxes from './3D/Boxes';
import ThreeScene from './3D/ThreeScene';
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import styles from './homepage.module.css';

function Homepage() {
  return (
    <>
      <Header />

      <div className={styles.canvas}>
        <ThreeScene>
          <Suspense fallback={null}>
            <Boxes />
            <color attach="background" args={['#090909']} />
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Stars depth={200} />
          </Suspense>
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
