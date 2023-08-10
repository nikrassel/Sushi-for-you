import { configureStore } from "@reduxjs/toolkit";
import filter from "./filterSlice";
import cart from "./cartSlice";
import menu from "./menuSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
    menu,
  },
});
