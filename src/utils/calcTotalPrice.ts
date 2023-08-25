import { TCartItem } from "../models";

export const calcTotalPrice = (cart: TCartItem[]) => {
  return cart.reduce((acc, elem) => {
    return (acc += elem.count * elem.price);
  }, 0);
};
