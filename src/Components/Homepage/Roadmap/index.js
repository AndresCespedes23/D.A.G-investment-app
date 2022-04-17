/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from './roadmap.module.css';

function Roadmap() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className={styles.roadmap} id="roadmap">
      <div className={styles.title}>
        <img src={`${process.env.PUBLIC_URL}/assets/img/distance.png`} alt="roadmap" />
        <h2>Roadmap</h2>
      </div>

      <section className={styles.roadmapContent}>
        <div className={styles.info} data-aos="zoom-out">
          <img src={`${process.env.PUBLIC_URL}/assets/img/tickets.png`} alt="tickets" />
          <p>
            nuestra colección tiene como proposito el sorteo de entradas para el mundial en Qatar.
            adquiriendo cada una de nuestras piezas participas del mismo.
          </p>
        </div>
        <div className={styles.info} data-aos="zoom-out">
          <img src={`${process.env.PUBLIC_URL}/assets/img/price.png`} alt="price" />
          <p>
            los precios varian segun la rareza del coleccionable que quieras adquirir
            y eso se refleja en el valor de la entrada
          </p>
        </div>
        <div className={styles.info} data-aos="zoom-out">
          <img src={`${process.env.PUBLIC_URL}/assets/img/winning.png`} alt="winner" />
          <p>
            si sos el ganador de una de las entradas podes
            quedartela, o venderla mediante el nft.
            la entrada se manda al dueño una semana despues de anunciado el ganador.
          </p>
          <p>
            asi podras modificar el precio de tu activo
            por si quisieras revenderlo en la blockchain
          </p>
        </div>
        <div className={styles.info} data-aos="zoom-out">
          <img src={`${process.env.PUBLIC_URL}/assets/img/clover.png`} alt="clover" />
          <p>
            poseer estos nfts te dara no solo la posibilidad de ganarte una entrada,
            sino que podras participar de más sorteos,
            acceso a otras colecciones y premios.
          </p>
        </div>

      </section>
    </div>
  );
}

export default Roadmap;
