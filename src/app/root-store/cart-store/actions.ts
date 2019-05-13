import { Action } from '@ngrx/store';
import { Product, CartItem } from '../../models';

export enum ActionTypes {
    ADD_TO_CART = '[CART][ADD]'
}

export class AddProductToCartAction implements Action {
  readonly type = ActionTypes.ADD_TO_CART;
  constructor(public payload: CartItem) {}
}

export type Actions = AddProductToCartAction;
