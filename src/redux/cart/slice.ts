import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICartSliceState } from "./types";
import { TCartItem } from "../../models";
import { getCartFromLS } from "../../utils/getCartFromLS";
import { calcTotalPrice } from "../../utils/calcTotalPrice";

const { items, totalPrice } = getCartFromLS();

const initialState: ICartSliceState = {
  totalPrice,
  items,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<TCartItem>) {
      const checkItem = state.items.find((obj) => obj.id === action.payload.id);
      if (checkItem) {
        checkItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    reduceItemCount(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
        if (findItem.count === 0) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, reduceItemCount } =
  cartSlice.actions;

export default cartSlice.reducer;
