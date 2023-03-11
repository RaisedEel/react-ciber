import { configureStore } from '@reduxjs/toolkit';

import panelSlice from './panel-slice';
import computersSlice from './computers-slice';
import alertSlice from './alert-slice';
import rentalsSlice from './rentals-slice';
import panelSummarySlice from './panelSummary-slice';

const store = configureStore({
	reducer: {
		alert: alertSlice.reducer,
		panel: panelSlice.reducer,
		computers: computersSlice.reducer,
		rentals: rentalsSlice.reducer,
		panelSummary: panelSummarySlice.reducer,
	},
});

export default store;
