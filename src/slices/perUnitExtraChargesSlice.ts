import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PerUnitExtraCharges {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface ExtraChargesState {
  items: PerUnitExtraCharges[];
}

const initialState: ExtraChargesState = {
  items: [],
};

const perUnitExtraChargesSlice = createSlice({
  name: "perUnitExtraCharges",
  initialState,
  reducers: {
    addPerUnitExtraCharges: (
      state,
      action: PayloadAction<PerUnitExtraCharges>
    ) => {
      state.items.push(action.payload);
    },
    removePerUnitExtraCharges: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updatePerUnitExtraCharges: (
      state,
      action: PayloadAction<PerUnitExtraCharges>
    ) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const {
  addPerUnitExtraCharges,
  removePerUnitExtraCharges,
  updatePerUnitExtraCharges,
} = perUnitExtraChargesSlice.actions;
export default perUnitExtraChargesSlice.reducer;
