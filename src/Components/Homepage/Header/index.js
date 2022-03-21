/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link } from 'react-scroll';
import ResponsiveNavbar from '../ResponsiveNavbar';
import styles from './header.module.css';
import Button from '../../Shared/Button';

function Header() {
  const [color, setColor] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
        <Button type="bars" onClick={() => setIsOpen(true)} />
        <div className={styles.navLinks}>
          <ul>
            <li><Link to="home" spy smooth offset={50} duration={500}>Who we are</Link></li>
            <li><Link to="nft" spy smooth offset={50} duration={500}>NFT</Link></li>
            <li><Link to="contact" spy smooth offset={50} duration={500}>Contact</Link></li>
          </ul>
        </div>
      </nav>
      <ResponsiveNavbar open={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}

export default Header;
