import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';


export function cartReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      return {
        cartItems: [...state.cartItems, action.payload],
        sum: state.sum + action.payload.item.price,
        total: state.cartItems.length + 1,
        isLoading: true,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}
