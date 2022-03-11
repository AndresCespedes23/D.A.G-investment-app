/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import styles from './responsive-navbar.module.css';
import Button from '../../Shared/Button';

function ResponsiveNavbar({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.navbarContainer}>
      <Button
        type="close"
        onClick={onClose}
      />
      <ul className={styles.navLinks}>
        <li>Who we are</li>
        <li>NFT</li>
        <li>Contact</li>
        <li>Login</li>
      </ul>
    </div>
  );
}

export default ResponsiveNavbar;
