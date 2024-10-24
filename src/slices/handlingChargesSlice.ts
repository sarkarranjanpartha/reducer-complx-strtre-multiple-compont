import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HandlingChargesState {
  cost: number;
}

const initialState: HandlingChargesState = {
  cost: 0,
};

const handlingChargesSlice = createSlice({
  name: "handlingCharges",
  initialState,
  reducers: {
    setHandlingCharges: (state, action: PayloadAction<number>) => {
      state.cost = action.payload;
    },
  },
});

export const { setHandlingCharges } = handlingChargesSlice.actions;
export default handlingChargesSlice.reducer;
