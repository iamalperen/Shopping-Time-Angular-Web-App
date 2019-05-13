import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
  } from '@ngrx/store';
  
  import {Product} from '../../models';
  
  import {State} from './state';
  
  const getError = (state: State): any => state.error;
  
  const getIsLoading = (state: State): boolean => state.isLoading;
  
  export const selectProductState: MemoizedSelector<object, State> = createFeatureSelector<State>('product');
  
  export const getAllProducts = (state: State): any => state.products;
  
  export const selectProductError: MemoizedSelector<object, any> = createSelector(selectProductState, getError);
  
  export const selectProductIsLoading: MemoizedSelector<object, boolean> = createSelector(selectProductState, getIsLoading);
  
  export const selectProducts: MemoizedSelector<object, Product[]> = createSelector(selectProductState, getAllProducts);
  