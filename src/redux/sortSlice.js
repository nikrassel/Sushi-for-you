import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeType: {
    title: "алфавиту",
    property: "title",
  },
  allTypes: [
    { title: "популярности", property: "rating" },
    { title: "цене", property: "price" },
    { title: "алфавиту", property: "title" },
  ],
  sortOrder: "asc",
};

export const sortSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    changeSortingType: (state, action) => {
      state.activeType = action.payload;
    },
    changeSortOrder: (state) => {
      if (state.sortOrder === "asc") {
        state.sortOrder = "desc";
      } else {
        state.sortOrder = "asc";
      }
    },
  },
});

export const { changeSortingType, changeSortOrder } = sortSlice.actions;

export default sortSlice.reducer;
