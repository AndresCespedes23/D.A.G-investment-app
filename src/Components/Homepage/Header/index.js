/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import styles from './header.module.css';
import Button from '../../Shared/Button';

function Header() {
  const [color, setColor] = useState(false);
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
        <Button type="bars" />
        <div className={styles.navLinks}>
          <ul>
            <li>Who we are</li>
            <li>NFT</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
