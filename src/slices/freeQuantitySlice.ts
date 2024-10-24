import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FreeQuantityState {
  percent: number;
}

const initialState: FreeQuantityState = {
  percent: 0,
};

const freeQuantitySlice = createSlice({
  name: "freeQuantity",
  initialState,
  reducers: {
    setFreeQuantityPercent: (state, action: PayloadAction<number>) => {
      state.percent = action.payload;
    },
  },
});

export const { setFreeQuantityPercent } = freeQuantitySlice.actions;
export default freeQuantitySlice.reducer;
