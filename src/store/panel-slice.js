import { createSlice } from '@reduxjs/toolkit';

const DUMMY_DEVICES = [
  { name: 'DEVICE 1', price: 10 },
  { name: 'DEVICE 2', price: 10 },
  { name: 'DEVICE 3', price: 5 },
];

const panelSlice = createSlice({
  name: 'panel',
  initialState: {
    devices: DUMMY_DEVICES,
  },
  reducers: {
    replaceDevices(state, action) {
      state.devices = action.payload;
    },
    addDevice(state, action) {
      state.devices.push(action.payload);
    },
    removeDevice(state, action) {
      state.devices = state.devices.filter(
        (device) => device.name !== action.payload
      );
    },
  },
});

export const panelActions = panelSlice.actions;
export default panelSlice;
