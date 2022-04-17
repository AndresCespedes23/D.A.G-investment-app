/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './header.module.css';

function Header() {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);
  return (
    <header className={color ? styles.headerChangeColor : styles.headerPosition}>
      <nav className={styles.headerContent}>
        <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-header.png`} alt="bennu logo" />
        <ul className={styles.navLinks}>
          <li>
            <Link to="home" spy smooth duration={500}>HOME</Link>
          </li>
          <li>
            <Link to="w" spy smooth duration={500}>QUIENSE SOMOS</Link>
          </li>
          <li>
            <Link to="roadmap" spy smooth duration={500}>ROADMAP</Link>
          </li>
          <li>
            <Link to="faq" spy smooth duration={500}>FAQs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
