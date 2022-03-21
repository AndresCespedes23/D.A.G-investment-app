/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './header.module.css';

function Header() {
  const [color, setColor] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  return (
    <header className={color ? styles.headerChangeColor : styles.headerPosition}>
      <nav className={styles.headerContent}>
        <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu.png`} alt="bennu logo" />
        <div className={styles.responsivePosition}>
          <div className={styles.hamburger} onClick={handleClick}>
            {click ? (<FaTimes size={30} />)
              : (<FaBars size={30} />)}
          </div>
          <div className={click ? styles.navLinksActive : styles.navLinks}>
            <ul>
              <li><Link to="home" spy smooth offset={50} duration={500} onClick={closeMenu}>Who we are</Link></li>
              <li><Link to="nft" spy smooth offset={50} duration={500} onClick={closeMenu}>NFT</Link></li>
              <li><Link to="contact" spy smooth offset={50} duration={500} onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Header;
