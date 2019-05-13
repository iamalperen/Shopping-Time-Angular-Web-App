import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';


export function cartReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const addedCartItem = action.payload;
      const existItem = state.cartItems.find(obj => {return obj.item.id === addedCartItem.item.id;});
      if(existItem){ existItem.amount++; }
      else {  state.cartItems = [...state.cartItems, addedCartItem]}
      return {
        cartItems: [...state.cartItems],
        sum: state.sum + addedCartItem.item.price,
        total: state.cartItems.length,
        isLoading: true,
        error: null
      };
    }
    default: {
      return state;
    }
  }
}
