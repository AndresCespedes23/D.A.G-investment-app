/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import styles from './layout.module.css';

function Layout() {
  return (
    <div className={styles.container}>
      <Header />

      <Footer />
    </div>
  );
}

export default Layout;
