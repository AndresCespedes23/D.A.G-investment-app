/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './presentation.module.css';

function WhoWeAre() {
  return (
    <section className={styles.presentationContainer} id="home">
      <div className={styles.presentationContent}>
        <h2 className={styles.title}>Who We are</h2>
        <p className={styles.infoW}>
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
    </section>
  );
}

export default WhoWeAre;
