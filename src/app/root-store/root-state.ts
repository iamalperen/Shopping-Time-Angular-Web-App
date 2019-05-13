import * as ProductState from './product-store/state';
import { CartStoreState } from './cart-store';


export interface State {
  product: ProductState.State;
  cart: CartStoreState.State;
}
