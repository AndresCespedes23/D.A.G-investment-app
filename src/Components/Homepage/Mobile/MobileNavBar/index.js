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
            <Link to="home" spy smooth duration={500}>
              <img src={`${process.env.PUBLIC_URL}/assets/img/casa.png`} alt="home" />
            </Link>
          </li>
          <li>
            <Link to="w" spy smooth duration={500}>
              <img src={`${process.env.PUBLIC_URL}/assets/img/anonimo.png`} alt="anonymus" />
            </Link>
          </li>
          <li>
            <Link to="roadmap" spy smooth duration={500}>
              <img src={`${process.env.PUBLIC_URL}/assets/img/distance.png`} alt="roadmap" />
            </Link>
          </li>
          <li>
            <Link to="faq" spy smooth duration={500}>
              <img src={`${process.env.PUBLIC_URL}/assets/img/pregunta.png`} alt="faq" />
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavBar;
