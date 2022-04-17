/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import styles from './loading.module.css';
import Spinner from '../Spinner';

function Loading() {
  const [isLoading, setLoading] = useState(false);
  const loadingTheather = () => {
    setTimeout(() => {
      setLoading(true);
    }, 5000);
  };
  window.addEventListener('load', loadingTheather);

  return (
    <section className={isLoading ? styles.modalHidden : styles.modalContainer}>
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <Spinner />
        </div>
      </div>
    </section>
  );
}

export default Loading;
