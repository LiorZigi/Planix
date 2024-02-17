import { configureStore } from '@reduxjs/toolkit';
import { eventRoutesSlice } from './slices/eventRoutes';

export const store = configureStore({
  reducer: {
    eventRoutes: eventRoutesSlice.reducer,
  },
});
