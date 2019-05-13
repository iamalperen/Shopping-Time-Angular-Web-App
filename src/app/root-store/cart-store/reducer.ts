import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';


export function cartReducer(state = initialState, action: Actions): State {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {
            const addedCartItem = action.payload;
            const existItem = state.cartItems.find(obj => {
                return obj.item.id === addedCartItem.item.id;
            });
            if (existItem) {
                existItem.amount++;
            } else {
                state.cartItems = [...state.cartItems, addedCartItem]
            }
            return {
                cartItems: [...state.cartItems],
                sum: state.sum + addedCartItem.item.price,
                total: state.cartItems.length,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.CLEAR_CART: {
            return {
                cartItems: [],
                sum: 0,
                total: 0,
                isLoading: true,
                error: null
            }
        }
        case ActionTypes.REMOVE_ITEM: {
            const removedCartItem = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.item.id !== removedCartItem.item.id);
            return {
                cartItems: [...state.cartItems],
                sum: state.sum - removedCartItem.amount * removedCartItem.item.price,
                total: state.total,
                isLoading: true,
                error: null
            };
        }
        case ActionTypes.UPDATE_CART: {
            const amount = action.payload.amount;
            const updatedCartItem = action.payload.item;
            const itemInState = state.cartItems.find(cartItem => cartItem.item.id === updatedCartItem.item.id);
            const diff = amount - updatedCartItem.amount;
            itemInState.amount = amount;
            return {
                cartItems: [...state.cartItems],
                sum: state.sum + (action.payload.item.item.price * diff),
                total: state.total,
                isLoading: true,
                error: null
            };
        }
        default: {
            return state;
        }
    }
}
