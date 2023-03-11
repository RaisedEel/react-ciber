import { createSlice } from '@reduxjs/toolkit';

const DUMMY_DEVICES = [
	{ name: 'DEVICE NUMBER 1', price: 10, initialTime: 0, rentedHours: 0 },
	{ name: 'DEVICE NUMBER 2', price: 10, initialTime: 0, rentedHours: 0 },
	{ name: 'DEVICE NUMBER 3', price: 10, initialTime: 0, rentedHours: 0 },
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
			state.devices.unshift({
				...action.payload,
				initialTime: 0,
				rentedHours: 0,
			});
		},
		updateDevice(state, action) {
			const indexDevice = state.devices.findIndex(
				(device) => device.name === action.payload.identification
			);
			state.devices[indexDevice] = {
				...state.devices[indexDevice],
				...action.payload.updatedValues,
			};
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
