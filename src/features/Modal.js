/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalState: (state) => {
      state.showModal = false;
    },
  },
});

export const { modalState } = modalSlice.actions;
export default modalSlice.reducer;
