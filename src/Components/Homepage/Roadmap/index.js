/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styles from './roadmap.module.css';

function Roadmap() {
  return (
    <div className={styles.roadmap}>
      <h1>Roadmap</h1>
      <section>
        <p>
          nuestra colección tiene como proposito el sorteo de entradas para el mundial en Qatar.
          adquiriendo cada una de nuestras piezas participas del mismo.
        </p>
        <p>
          los precios varian segun la rareza del coleccionable que quieras adquirir
          y eso se refleja en el valor de la entrada
        </p>
        <p>
          si sos el ganador de una de las entradas podes
          quedartela, o venderla mediante el nft.
          la entrada se manda al dueño una semana despues de anunciado el ganador
        </p>
        <p>
          asi podras modificar el precio de tu activo
          por si quisieras revenderlo en la blockchain
        </p>
        <p>
          poseer estos nfts te dara no solo la posibilidad de ganarte una entrada,
          sino que podras participar de más sorteos.
          acceso a otras colecciones y premios.
        </p>
      </section>
    </div>
  );
}

export default Roadmap;
