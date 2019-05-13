import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import {State} from './state';
  
  import {Cart, CartItem} from '../../models';
  
  const getCartTotal = (state: State): any => state.total;
      
  const selectCartState: MemoizedSelector<object, State> = createFeatureSelector<State>('cart');
  
  export const selectCartTotal: MemoizedSelector<object, number> = createSelector(selectCartState, getCartTotal);
  
  