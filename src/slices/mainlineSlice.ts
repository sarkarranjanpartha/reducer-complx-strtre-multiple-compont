import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainlineItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface MainlineState {
  items: MainlineItem[];
}

const initialState: MainlineState = {
  items: [],
};

const mainlineSlice = createSlice({
  name: "mainline",
  initialState,
  reducers: {
    addMainlineItem: (state, action: PayloadAction<MainlineItem>) => {
      state.items.push(action.payload);
    },
    removeMainlineItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateMainlineItem: (state, action: PayloadAction<MainlineItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const { addMainlineItem, removeMainlineItem, updateMainlineItem } =
  mainlineSlice.actions;
export default mainlineSlice.reducer;
