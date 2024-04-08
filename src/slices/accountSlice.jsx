import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios  from "axios";

const initialState = {
  amount: 10,
};

export const getUser = createAsyncThunk(
  "account/getUser",
  async (userId, thunkAPI) => {
    
    const {data} = await axios.get(`http://localhost:3000/accounts/${userId}`)
    console.log(data)
    return data.amount
  }
);

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
    incrementByAmount: (state, action) => {
      console.log(action.payload)
      state.amount += action.payload;
    },
  },
  extraReducers:(builder)=>{
    builder.addCase(getUser.fulfilled,(state,action)=>{
      state.amount = action.payload
    })
  }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions;

export default accountSlice.reducer;
