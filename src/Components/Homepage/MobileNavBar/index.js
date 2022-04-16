/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-scroll';
import styles from './mobile-navbar.module.css';

function MobileNavBar() {
  return (
    <section className={styles.navbarPosition}>
      <nav className={styles.navbarContent}>
        <ul className={styles.navLinks}>
          <li>
            <Link to="home" spy smooth offset={50} duration={500}>HOME</Link>
          </li>
          <li>
            <Link to="w" spy smooth offset={50} duration={500}>QUIENSE SOMOS</Link>
          </li>
          <li>
            <Link to="roadmap" spy smooth offset={50} duration={500}>ROADMAP</Link>
          </li>
          <li>
            <Link to="faq" spy smooth offset={50} duration={500}>FAQs</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavBar;
