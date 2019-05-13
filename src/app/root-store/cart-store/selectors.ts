import {
    createFeatureSelector,
    createSelector,
    MemoizedSelector
} from '@ngrx/store';

import {State} from './state';

import {Cart, CartItem} from '../../models';

const getCartTotal = (state: State): any => state.total;

const getCartSum = (state: State): any => state.sum;

const getCartItems = (state: State): any => state.cartItems;

const selectCartState: MemoizedSelector<object, State> = createFeatureSelector<State>('cart');

export const selectCartTotal: MemoizedSelector<object, number> = createSelector(selectCartState, getCartTotal);

export const selectCartSum: MemoizedSelector<object, number> = createSelector(selectCartState, getCartSum);

export const selectCartItems: MemoizedSelector<object, CartItem[]> = createSelector(selectCartState, getCartItems);
