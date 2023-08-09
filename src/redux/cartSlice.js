import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const checkItem = state.items.find((obj) => obj.id === action.payload.id);
      if (checkItem) {
        checkItem.count += 1;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = state.items.reduce((acc, elem) => {
        return (acc += elem.count * elem.price);
      }, 0);
    },
    reduceItemCount(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      findItem.count -= 1;
      if (findItem.count === 0) {
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
      state.totalPrice = state.items.reduce((acc, elem) => {
        return (acc += elem.count * elem.price);
      }, 0);
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((acc, elem) => {
        return (acc += elem.count * elem.price);
      }, 0);
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
