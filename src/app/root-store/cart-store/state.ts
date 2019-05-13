import {CartItem} from '../../models';

export interface State {
  cartItems: CartItem[];
  total: number;
  sum: number;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  cartItems: [],
  total: 0,
  sum: 0,
  isLoading: false,
  error: null
};