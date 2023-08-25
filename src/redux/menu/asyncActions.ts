import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { MenuItem } from "../../models";

export const fetchMenu = createAsyncThunk(
  "menu/fetchItems",
  async (endpoint: string) => {
    const baseUrl = "https://64cb863e700d50e3c7060c63.mockapi.io/items?";
    const res = await axios.get(baseUrl + endpoint);
    return res.data as MenuItem[];
  }
);
