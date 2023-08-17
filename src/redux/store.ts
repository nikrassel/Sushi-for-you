import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
