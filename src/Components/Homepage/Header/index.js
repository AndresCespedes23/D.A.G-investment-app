/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.headerPosition}>
      <nav className={styles.headerContent}>
        <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-logo1.png`} alt="bennu logo" />
      </nav>

    </header>
  );
}

export default Header;
