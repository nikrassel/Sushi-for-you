import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMenuSliceState } from "./types";
import { MenuItem } from "../../models";
import { fetchMenu } from "./asyncActions";

const initialState: IMenuSliceState = {
  items: [],
  loading: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<MenuItem[]>) {
      state.items = action.payload;
    },
    clearItems(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.loading = true;
        state.items = [];
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.loading = false;
        state.items = [];
      });
  },
});

export const { clearItems, setItems } = menuSlice.actions;

export default menuSlice.reducer;
