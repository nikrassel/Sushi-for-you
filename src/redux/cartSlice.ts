import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  imageSource: string;
  type: string;
  size: number;
  count: number;
};

interface ICartSliceState {
  totalPrice: number;
  items: CartItem[];
}

const initialState: ICartSliceState = {
  totalPrice: 0,
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
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
    reduceItemCount(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count -= 1;
        if (findItem.count === 0) {
          state.items = state.items.filter((obj) => obj.id !== action.payload);
        }
        state.totalPrice = state.items.reduce((acc, elem) => {
          return (acc += elem.count * elem.price);
        }, 0);
      }
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

export const selectCart = (state: RootState) => state.cart;
export const selectItemById = (id: string) => (state: RootState) =>
  state.cart.items.find((obj) => obj.id === id);

export default cartSlice.reducer;
