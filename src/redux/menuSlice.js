import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMenu = createAsyncThunk(
  "menu/fetchItems",
  async (endpoint) => {
    const baseUrl = "https://64cb863e700d50e3c7060c63.mockapi.io/items?";
    const res = await axios.get(baseUrl + endpoint);
    return res.data;
  }
);

const initialState = {
  items: [],
  loading: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setItems(state, action) {
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

export const selectMenu = (state) => state.menu;

export default menuSlice.reducer;
