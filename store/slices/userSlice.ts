// userSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../../firebase';
import {
  getSerializableUser,
  SerializableUser,
} from '../../core/utils/serializedUser';

interface UserState {
  user: User | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: UserState = {
  user: null as User | null,
  status: 'idle',
  error: undefined as string | undefined,
};

export const fetchUser = createAsyncThunk<
  SerializableUser | null,
  void,
  { rejectValue: string }
>('user/fetchUser', async (_, { rejectWithValue }) => {
  try {
    return await new Promise<SerializableUser | null>((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (user: any) => {
        if (user) {
          resolve(getSerializableUser(user));
        } else {
          reject('No user logged in');
        }
        unsubscribe();
      });
    });
  } catch (error: any) {
    return rejectWithValue(error.message);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchUser.fulfilled,
        (state, action: PayloadAction<SerializableUser | null>) => {
          state.status = 'succeeded';
          state.user = action.payload as User;
        }
      )
      .addCase(
        fetchUser.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.status = 'failed';
          state.error = action.payload;
        }
      );
  },
});

export const { setUser, clearUser } = userSlice.actions;

export { userSlice };
