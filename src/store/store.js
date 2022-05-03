import { configureStore } from '@reduxjs/toolkit';

import panelSlice from './panel-slice';
import computersSlice from './computers-slice';
import alertSlice from './alert-slice';

const store = configureStore({
  reducer: {
    alert: alertSlice.reducer,
    panel: panelSlice.reducer,
    computers: computersSlice.reducer,
  },
});

export default store;
