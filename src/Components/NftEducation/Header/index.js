/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function Header() {
  return (
    <header>
      <nav className={styles.headerContent}>
        <Link to="/">
          <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu.png`} alt="bennu logo" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
