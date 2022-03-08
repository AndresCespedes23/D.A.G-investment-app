/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Button from '../../Button';
import styles from './confirmation.module.css';

function Confirmation({ message, handleDelete, handleShowModal }) {
  return (
    <div className={styles.container}>
      <p>{message}</p>
      <div className={styles.buttonsContainer}>
        <Button
          type="confirm"
          onClick={() => {
            handleDelete();
            handleShowModal();
          }}
        >
          Yes
        </Button>
        <Button type="cancel" onClick={handleShowModal}>
          No
        </Button>
      </div>
    </div>
  );
}
export default Confirmation;
