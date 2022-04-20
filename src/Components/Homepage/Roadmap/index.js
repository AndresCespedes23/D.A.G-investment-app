/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import Aos from 'aos';
import Title from './Title';
import 'aos/dist/aos.css';
import styles from './roadmap.module.css';

function Roadmap() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Title />
      <div className={styles.roadmap} id="roadmap">
        <section className={styles.roadmapContent}>
          <div className={styles.fields}>
            <div className={styles.info1} data-aos="zoom-in">
              <img src={`${process.env.PUBLIC_URL}/assets/img/tickets.png`} alt="tickets" />
              <p>
                Nuestra colección tiene como proposito
                el sorteo de entradas para el mundial en Qatar.
                adquiriendo cada una de nuestras piezas participas del mismo.
              </p>
            </div>
          </div>
          {/* <img
          className={styles.arrows}
          src={`${process.env.PUBLIC_URL}/assets/fulvo/1.png`}
          alt="bennu logo" /> */}
          <div className={styles.fields2}>
            <div className={styles.info2} data-aos="zoom-in">
              <img src={`${process.env.PUBLIC_URL}/assets/img/price.png`} alt="price" />
              <p>
                Los precios varian segun la rareza del coleccionable que quieras adquirir
                y eso se refleja en el valor de la entrada
              </p>
            </div>
          </div>
          {/* <img
          className={styles.arrows}
          src={`${process.env.PUBLIC_URL}/assets/fulvo/2.png`}
        alt="bennu logo" /> */}
          <div className={styles.fields}>
            <div className={styles.info1} data-aos="zoom-in">
              <img src={`${process.env.PUBLIC_URL}/assets/img/winning.png`} alt="winner" />
              <p>
                Si sos el ganador de una de las entradas podes
                quedartela, o venderla mediante el nft.
                la entrada se manda al dueño una semana despues de anunciado el ganador.
              </p>
            </div>
          </div>
          {/* <img
          className={styles.arrows}
          src={`${process.env.PUBLIC_URL}/assets/fulvo/3.png`}
          alt="bennu logo" /> */}
          <div className={styles.fields2}>
            <div className={styles.info2} data-aos="zoom-in">
              <img src={`${process.env.PUBLIC_URL}/assets/img/clover.png`} alt="clover" />
              <p>
                Poseer estos nfts te dara no solo la posibilidad de ganarte una entrada,
                sino que podras participar de más sorteos,
                acceso a otras colecciones y premios.
              </p>
            </div>
          </div>
        </section>
      </div>

    </>
  );
}

export default Roadmap;
