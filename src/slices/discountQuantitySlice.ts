import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DiscountQuantityState {
  percent: number;
}

const initialState: DiscountQuantityState = {
  percent: 0,
};

const discountQuantitySlice = createSlice({
  name: "discountQuantity",
  initialState,
  reducers: {
    setDiscountPercent: (state, action: PayloadAction<number>) => {
      state.percent = action.payload;
    },
  },
});

export const { setDiscountPercent } = discountQuantitySlice.actions;
export default discountQuantitySlice.reducer;
