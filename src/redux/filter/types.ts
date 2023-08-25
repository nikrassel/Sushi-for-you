import { TCategory, SortType } from "../../models";

export interface IFilterSliceState {
  activeCategory: TCategory;
  allCategories: TCategory[];
  activeSortType: SortType;
  sortTypes: SortType[];
  sortOrder: "asc" | "desc";
  currentPage: number;
  searchValue: string;
}
