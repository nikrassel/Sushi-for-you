import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

export const fetchMenu = createAsyncThunk(
  "menu/fetchItems",
  async (endpoint: string) => {
    const baseUrl = "https://64cb863e700d50e3c7060c63.mockapi.io/items?";
    const res = await axios.get(baseUrl + endpoint);
    return res.data as MenuItem[];
  }
);

type MenuItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  types: number[];
  number: number[];
  category: string[];
  rating: number;
};

interface IMenuSliceState {
  items: MenuItem[];
  loading: boolean;
}

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

export const selectMenu = (state: RootState) => state.menu;

export default menuSlice.reducer;
