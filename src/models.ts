export type MenuItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  types: number[];
  number: number[];
  category: string[];
  rating: number;
};

export type TCategory = {
  name: string;
  id: number;
};

export type SortType = {
  title: string;
  property: string;
};

export type SearchParams = {
  categoryId: string;
  currentPage: string;
  sortProperty: string;
};

export type TCartItem = {
  id: string;
  title: string;
  price: number;
  imageSource: string;
  type: string;
  size: number;
  count: number;
};
