/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './reset.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import modalReducer from './features/Modal';
import Routes from './Routes';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
