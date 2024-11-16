import { configureStore } from '@reduxjs/toolkit';
import { membersCounterSlice } from './slices/membersCounter';
import { userSlice } from './slices/userSlice';
import { User } from 'firebase/auth';
import themeReducer from './reducers/themeReducer';

export type AppDispatch = typeof store.dispatch;
export interface RootState {
  membersCounter: membersCounterState;
  user: userState;
  theme: themeState;
}

export interface membersCounterState {
  value: number;
}

export interface userState {
  user: User | null;
  status: string;
  error: any;
}

export interface themeState {
  mode: string;
}

export const store = configureStore({
  reducer: {
    membersCounter: membersCounterSlice.reducer,
    user: userSlice.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
