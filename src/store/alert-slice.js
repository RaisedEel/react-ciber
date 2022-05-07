import { createSlice } from '@reduxjs/toolkit';

// This slice handle the Alert component, just call setAlert to make it appear
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
