import {Action} from '@ngrx/store';
import {Product, CartItem} from '../../models';

export enum ActionTypes {
    ADD_TO_CART = '[CART][ADD]',
    CLEAR_CART = '[CART][CLEAR]',
    REMOVE_ITEM = '[CART][REMOVE_ITEM]',
    UPDATE_CART = '[CART][UPDATE]'
}

export class AddProductToCartAction implements Action {
    readonly type = ActionTypes.ADD_TO_CART;
    constructor(public payload: CartItem) { }
}

export class ClearCartAction implements Action {
    readonly type = ActionTypes.CLEAR_CART;
    constructor() {}
}

export class RemoveItemFromCartAction implements Action {
    readonly type = ActionTypes.REMOVE_ITEM;
    constructor(public payload: CartItem) {}
}

export class UpdateCartAction implements Action {
    readonly type = ActionTypes.UPDATE_CART;
    constructor(public payload: {amount: number, item: CartItem}) {}
}

export type Actions = AddProductToCartAction | ClearCartAction | RemoveItemFromCartAction | UpdateCartAction;
