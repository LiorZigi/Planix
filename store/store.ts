import { configureStore } from '@reduxjs/toolkit';
import { membersCounterSlice } from './slices/membersCounter';
import { userSlice } from './slices/userSlice';
import { User } from 'firebase/auth';

export type AppDispatch = typeof store.dispatch;
export interface RootState {
  membersCounter: membersCounterState;
  user: userState;
}

export interface membersCounterState {
  value: number;
}

export interface userState {
  user: User | null;
  status: string;
  error: any;
}

export const store = configureStore({
  reducer: {
    membersCounter: membersCounterSlice.reducer,
    user: userSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
