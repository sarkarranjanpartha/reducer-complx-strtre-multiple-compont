import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Upsell {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface UpsellState {
  items: Upsell[];
}

const initialState: UpsellState = {
  items: [],
};

const upsellSlice = createSlice({
  name: "upsell",
  initialState,
  reducers: {
    addupsellItem: (state, action: PayloadAction<Upsell>) => {
      state.items.push(action.payload);
    },
    removeupsellItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateupsellItem: (state, action: PayloadAction<Upsell>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addupsellItem, removeupsellItem, updateupsellItem } =
  upsellSlice.actions;
export default upsellSlice.reducer;
