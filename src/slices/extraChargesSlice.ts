import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExtraCharges {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface ExtraChargesState {
  items: ExtraCharges[];
}

const initialState: ExtraChargesState = {
  items: [],
};

const extraChargesSlice = createSlice({
  name: "extraCharges",
  initialState,
  reducers: {
    addExtraCharges: (state, action: PayloadAction<ExtraCharges>) => {
      state.items.push(action.payload);
    },
    removeExtraCharges: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateExtraCharges: (state, action: PayloadAction<ExtraCharges>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addExtraCharges, removeExtraCharges, updateExtraCharges } =
  extraChargesSlice.actions;
export default extraChargesSlice.reducer;
