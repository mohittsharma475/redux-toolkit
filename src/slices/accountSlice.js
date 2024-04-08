import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 1,
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    increment: (state) => {
      state.amount += 1; //iMMER library
    },
    decrement: (state) => {
      state.amount -= 1;
    },
    incrementByValue: (state, action) => {
      state.amount += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByValue } = accountSlice.actions;

export default accountSlice.reducer;
