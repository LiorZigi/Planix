import { configureStore } from '@reduxjs/toolkit';
import { membersCounterSlice } from './slices/membersCounter';

export interface RootState {
  membersCounter: membersCounterState;
}

export interface membersCounterState {
  value: number;
}

export const store = configureStore({
  reducer: {
    membersCounter: membersCounterSlice.reducer,
  },
});
