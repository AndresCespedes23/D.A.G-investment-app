/* eslint-disable react/jsx-filename-extension */
import React, { Suspense } from 'react';
import {
  Stars,
} from '@react-three/drei';
import ThreeScene from '../../3D/ThreeScene';
import Ether from '../../3D/Ether';
import HeaderEducation from '../../Shared/Header';
import Footer from '../../Shared/Footer';
import styles from './minting.module.css';

function Minting() {
  return (
    <>
      <HeaderEducation />

      <div className={styles.canvas}>
        <ThreeScene>
          <Suspense fallback={null}>
            <Ether />
            <color attach="background" args={['#090909']} />
            <ambientLight />
            <pointLight position={[5, 5, 5]} />
            <Stars depth={200} />
          </Suspense>
        </ThreeScene>
      </div>

      <div className={styles.mintingContent}>
        <h2>Minting process</h2>
        <div>
          <h3>Step 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam sit amet venenatis felis. Aenean sed dapibus mauris.
            Vestibulum eget blandit risus, sit amet efficitur felis.
            Suspendisse feugiat metus in tortor aliquam, at tempor enim sollicitudin.
            Proin luctus ullamcorper nisl a consequat.
            Proin posuere nisi enim, sed maximus lorem elementum a.
            elit orci, maximus rhoncus vehicula vitae, vulputate et neque.
            Etiam venenatis odio vitae justo tristique, sed vehicula lectus varius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nisi.
          </p>
          <h3>Step 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam sit amet venenatis felis. Aenean sed dapibus mauris.
            Vestibulum eget blandit risus, sit amet efficitur felis.
            Suspendisse feugiat metus in tortor aliquam, at tempor enim sollicitudin.
            Proin luctus ullamcorper nisl a consequat.
            Proin posuere nisi enim, sed maximus lorem elementum a.
            elit orci, maximus rhoncus vehicula vitae, vulputate et neque.
            Etiam venenatis odio vitae justo tristique, sed vehicula lectus varius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nisi.
          </p>
          <h3>Step 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam sit amet venenatis felis. Aenean sed dapibus mauris.
            Vestibulum eget blandit risus, sit amet efficitur felis.
            Suspendisse feugiat metus in tortor aliquam, at tempor enim sollicitudin.
            Proin luctus ullamcorper nisl a consequat.
            Proin posuere nisi enim, sed maximus lorem elementum a.
            elit orci, maximus rhoncus vehicula vitae, vulputate et neque.
            Etiam venenatis odio vitae justo tristique, sed vehicula lectus varius.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero nisi.
          </p>
        </div>
      </div>
      <Footer />
    </ >
  );
}

export default Minting;
