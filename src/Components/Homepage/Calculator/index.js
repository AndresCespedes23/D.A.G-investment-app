/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../../Shared/Button';
import styles from './calculator.module.css';

function Calculator({ open, onClose }) {
  if (!open) return null;
  return (
    <div className={styles.calculatorBackground}>
      <div className={styles.calculatorContainer}>
        <div className={styles.titleCloseBtn}>
          <Button type="close" onClick={onClose} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
