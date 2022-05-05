import { createSlice } from '@reduxjs/toolkit';

const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alert: null,
  },
  reducers: {
    setAlert(state, action) {
      state.alert = {
        title: action.payload.title,
        message: action.payload.message,
        okMessage: action.payload.okMessage,
      };
    },
    hideAlert(state) {
      state.alert = null;
    },
  },
});

export const alertActions = alertSlice.actions;
export default alertSlice;
