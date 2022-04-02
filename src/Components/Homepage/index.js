/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Stars,
} from '@react-three/drei';
import Sphere from './3D/Sphere';
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
          <Sphere />
          <color attach="background" args={['#090909']} />
          <ambientLight />
          <pointLight position={[5, 5, 5]} />
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
