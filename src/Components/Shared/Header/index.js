/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { Link } from 'react-router-dom';
import styles from './header.module.css';

function HeaderEducation() {
  return (
    <header>
      <nav className={styles.headerContent}>
        <Link to="/">
          <img className={styles.logo} src={`${process.env.PUBLIC_URL}/assets/img/bennu-logo1.png`} alt="bennu logo" />
        </Link>
      </nav>
    </header>
  );
}

export default HeaderEducation;
