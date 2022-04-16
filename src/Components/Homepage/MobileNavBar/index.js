/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import styles from './mobile-navbar.module.css';

function MobileNavBar() {
  return (
    <section className={styles.navbarPosition}>
      <nav className={styles.navbarContent}>
        <ul className={styles.navLinks}>
          <li>
            HOME
          </li>
          <li>
            QUIENES SOMOS
          </li>
          <li>
            ROADMAP
          </li>
          <li>
            FAQs
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default MobileNavBar;
