import { createSlice } from '@reduxjs/toolkit';

const panelSummarySlice = createSlice({
	name: 'panelSummary',
	initialState: { active: 0, inactive: 0, alerts: [] },
	reducers: {
		updateActive(state, action) {
			state.active += +action.payload;
		},
		updateInactive(state, action) {
			state.inactive = action.payload;
		},
		addAlert(state, action) {
			if (state.alerts.includes(action.payload)) {
				return;
			}
			state.alerts.push(action.payload);
		},
		removeAlert(state, action) {
			state.alerts = state.alerts.filter((alert) => action.payload !== alert);
		},
	},
});

export const panelSummaryActions = panelSummarySlice.actions;
export default panelSummarySlice;
