import { createSlice } from '@reduxjs/toolkit';

export const eventRoutesSlice = createSlice({
  name: 'eventRoutes',
  initialState: {
    value: [],
  },
  reducers: {
    setEventRoutes: (state, action) => {
      state.value = action.payload.route;
    },
  },
});

export const setEventRoutes = eventRoutesSlice.actions.setEventRoutes;
export default eventRoutesSlice.reducer;
