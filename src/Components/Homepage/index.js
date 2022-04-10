/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
/* import {
  Stars,
} from '@react-three/drei';
import ThreeScene from '../3D/ThreeScene';
import Boxes from '../3D/Boxes';
import Sphere from '../3D/Sphere'; */
import Header from './Header';
import WhoWeAre from './WhoWeAre';
import NftInformation from './NftInformation';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import styles from './homepage.module.css';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Header />

      {/* <div className={styles.canvas}>
        <ThreeScene>
          <Suspense fallback={null}>
            <Boxes />
            <Sphere />
            <color attach="background" args={['#090909']} />
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Stars depth={200} />
          </Suspense>
        </ThreeScene>
  </div> */}
      <div className={styles.homeContainer}>
        <WhoWeAre />
        <NftInformation />
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default Homepage;
