import { MenuItem } from "../../models";

export interface IMenuSliceState {
  items: MenuItem[];
  loading: boolean;
}
