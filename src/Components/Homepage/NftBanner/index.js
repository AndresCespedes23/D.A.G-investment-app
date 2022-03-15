/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import axios from 'axios';
import { Search10CryptoPunks } from './moralis-api-endpoints/api';
import styles from './banner.module.css';

function NftBanner() {
  const fetchCryptoPunks = async () => {
    await axios.get(Search10CryptoPunks(), {
      headers: {
        'X-API-KEY': 'xuhY5bsVXeQNxrKvcL2uLMuxqPNChINgBZdXD1z2VuXnpOeWglWIW3k4jgpZiAsn',
      },
    });
  };
  useEffect(() => {
    fetchCryptoPunks();
  }, []);

  return (
    <section className={styles.bannerContainer}>NftBanner</section>
  );
}

export default NftBanner;
