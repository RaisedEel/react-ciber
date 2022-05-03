import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    showAlert: false,
    title: '',
    message: '',
    close: '',
    confirm: '',
    extra: {},
  },
  reducers: {
    setAlert(state, action) {
      state.showAlert = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.close = action.payload.close;
      state.confirm = action.payload.confirm;
      state.extra = action.payload.extra;
    },
    hideAlert(state) {
      state.showAlert = false;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
