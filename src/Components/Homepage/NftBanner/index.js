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
      console.log(res.data.result[0].metadata);
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
              <img key={nft.token_id} src={nft.image} alt={nft.name} />
              <span>{nft.token_uri}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default NftBanner;
