import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filterSlice";
import sortSlice from "./sortSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    sorting: sortSlice,
  },
});
