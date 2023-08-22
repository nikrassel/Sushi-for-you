import { MenuItem, TCategory, SortType, TCartItem } from "../models";

export interface IMenuSliceState {
  items: MenuItem[];
  loading: boolean;
}

export interface IFilterSliceState {
  activeCategory: TCategory;
  allCategories: TCategory[];
  activeSortType: SortType;
  sortTypes: SortType[];
  sortOrder: "asc" | "desc";
  currentPage: number;
  searchValue: string;
}

export interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
}
