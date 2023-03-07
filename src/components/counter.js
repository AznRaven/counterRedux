import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    // action = parameter  e.target.value
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    }
  }
});

// export all your functions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
