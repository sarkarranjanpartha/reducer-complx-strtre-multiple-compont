import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShippingState {
  cost: number;
}

const initialState: ShippingState = {
  cost: 0,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    setShippingCost: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
  },
});

export const { setShippingCost } = shippingSlice.actions;
export default shippingSlice.reducer;
