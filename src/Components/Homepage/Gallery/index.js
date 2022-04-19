/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import styles from './gallery.module.css';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/qatar-2022.png`} alt="qatar" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-2018-russia.png`} alt="russia" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-2014-brazil.png`} alt="brazil" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-2010-south-africa.png`} alt="south africa" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-2006-germany.png`} alt="germany" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-2002-korea-japan.png`} alt="korea-japan" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1998-france.png`} alt="france" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1994-usa.png`} alt="usa" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1990-italy.png`} alt="italy" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1986-mexico.png`} alt="mexico" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1982-spain.png`} alt="spain" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1978-argentina.png`} alt="argentina" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1974-west-germany.png`} alt="west germany" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1970-mexico.png`} alt="mexico" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1966-england.png`} alt="england" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1962-chile.png`} alt="chile" onDragStart={handleDragStart} />,
  <img src={`${process.env.PUBLIC_URL}/assets/gallery/logo-1958-sweden.png`} alt="sweden" onDragStart={handleDragStart} />,
];

function Gallery() {
  const responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 5 },
  };
  return (
    <section className={styles.gallery}>
      <AliceCarousel
        autoWidth={false}
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={1000}
        animationDuration={1000}
        infinite
        touchTracking={false}
        disableDotsControls
        disableButtonsControls
        mouseTracking
        paddingLeft={100}
        responsive={responsive}
        items={items}
      />
    </section>
  );
}

export default Gallery;
