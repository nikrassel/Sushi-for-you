import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import filter from "./filter/slice";
import cart from "./cart/slice";
import menu from "./menu/slice";

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
