import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const userDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {},
  reducers: {
    saveDetails: (state, action) => action.payload,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { saveDetails } = userDetailsSlice.actions;

export const mystore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    myDetails: userDetailsSlice.reducer,
  },
});
