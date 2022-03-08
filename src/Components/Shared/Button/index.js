/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import {
  FaPlus,
  FaTrashAlt,
  FaEdit,
  FaRegWindowClose,
  FaEye,
  FaBars,
} from 'react-icons/fa';
import styles from './button.module.css';

function Button({ type, onClick, text }) {
  return (
    <button className={styles[type]} onClick={onClick}>
      {type === 'add' && <FaPlus />}
      {type === 'update' && <FaEdit />}
      {type === 'delete' && <FaTrashAlt />}
      {type === 'info' && <FaEye />}
      {type === 'close' && <FaRegWindowClose />}
      {type === 'submit' && 'SUBMIT'}
      {type === 'search' && `SEARCH ${text || ''}`}
      {type === 'addNew' && `ADD NEW ${text || ''}`}
      {type === 'confirm' && 'YES'}
      {type === 'cancel' && 'NO'}
      {type === 'bars' && <FaBars />}
    </button>
  );
}

export default Button;
