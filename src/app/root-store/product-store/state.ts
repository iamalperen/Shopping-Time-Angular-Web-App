import {Product} from '../../models';

export interface State {
  products: Product[];
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  products: [],
  isLoading: false,
  error: null
};
