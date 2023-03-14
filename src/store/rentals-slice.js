import { createSlice } from '@reduxjs/toolkit';

const DUMMY_RENTALS = [
	{
		id: 'r1',
		date: new Date().toISOString().slice(0, 10),
		name: 'DEVICE NUMBER 1',
		startTime: '10:10',
		endTime: '11:10',
		price: 10,
		total: 10,
	},
	{
		id: 'r2',
		date: new Date().toISOString().slice(0, 10),
		name: 'DEVICE NUMBER 2',
		startTime: '11:10',
		endTime: '13:10',
		price: 10,
		total: 20,
	},
	{
		id: 'r3',
		date: '2022-05-01',
		name: 'DEVICE NUMBER 2',
		startTime: '18:00',
		endTime: '20:00',
		price: 10,
		total: 20,
	},
	{
		id: 'r4',
		date: '2022-05-01',
		name: 'DEVICE NUMBER 2',
		startTime: '15:00',
		endTime: '17:00',
		price: 10,
		total: 20,
	},
	{
		id: 'r5',
		date: '2022-05-04',
		name: 'DEVICE NUMBER 1',
		startTime: '18:00',
		endTime: '19:00',
		price: 10,
		total: 10,
	},
	{
		id: 'r6',
		date: '2022-05-04',
		name: 'DEVICE NUMBER 3',
		startTime: '15:00',
		endTime: '19:00',
		price: 10,
		total: 40,
	},
];

const rentalsSlice = createSlice({
	name: 'rentals',
	initialState: {
		rentals: DUMMY_RENTALS,
	},
	reducers: {
		replaceRentals(state, action) {
			state.rentals = action.payload.rentals;
		},
		addRental(state, action) {
			state.rentals.unshift(action.payload);
		},
		removeRental(state, action) {
			state.rentals = state.rentals.filter(
				(rental) => rental.id !== action.payload
			);
		},
	},
});

export const rentalsActions = rentalsSlice.actions;
export default rentalsSlice;
