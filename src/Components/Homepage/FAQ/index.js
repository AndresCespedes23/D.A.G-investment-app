/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Dropdown from '../../Shared/Dropdown';
import styles from './faq.module.css';

function FAQ() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className={styles.hero} id="faq">
      <div>
        <div className={styles.title} data-aos="zoom-in">
          <img src={`${process.env.PUBLIC_URL}/assets/img/question.png`} alt="faq" />
          <h2>F.A.Q</h2>
        </div>
      </div>
      <Dropdown />
    </div>
  );
}

export default FAQ;
