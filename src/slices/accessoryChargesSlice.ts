import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccessoryCharges {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface AccessoryChargesState {
  items: AccessoryCharges[];
}

const initialState: AccessoryChargesState = {
  items: [],
};

const accessoryChargesSlice = createSlice({
  name: "accessoryCharges",
  initialState,
  reducers: {
    addAccessoryCharges: (state, action: PayloadAction<AccessoryCharges>) => {
      state.items.push(action.payload);
    },
    removeAccessoryCharges: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateAccessoryCharges: (
      state,
      action: PayloadAction<AccessoryCharges>
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
  addAccessoryCharges,
  removeAccessoryCharges,
  updateAccessoryCharges,
} = accessoryChargesSlice.actions;
export default accessoryChargesSlice.reducer;
