import { TCartItem } from "../../models";

export interface ICartSliceState {
  totalPrice: number;
  items: TCartItem[];
}
