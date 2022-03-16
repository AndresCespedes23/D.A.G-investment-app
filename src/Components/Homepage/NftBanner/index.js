/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Search10CryptoPunks } from './moralis-api-endpoints/api';
import styles from './banner.module.css';

function NftBanner() {
  const [collection, setCollection] = useState([]);

  const fetchCryptoPunks = async () => {
    await axios.get(Search10CryptoPunks(), {
      headers: {
        'X-API-KEY': 'xuhY5bsVXeQNxrKvcL2uLMuxqPNChINgBZdXD1z2VuXnpOeWglWIW3k4jgpZiAsn',
      },
    }).then((res) => {
      console.log(res.data.result);
      setCollection(res.data.result);
    }).catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    fetchCryptoPunks();
  }, []);

  return (
    <section className={styles.bannerContainer}>
      {collection.length > 0 && (
        <div>
          {collection.map((nft) => (
            <div>
              <img src={nft?.metadata} alt={nft.name} />
              <div>{nft.metadata}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default NftBanner;
