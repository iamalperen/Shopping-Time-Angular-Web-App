import {Actions, ActionTypes} from './actions';
import {initialState, State} from './state';

export function productReducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null
      };
    }
    case ActionTypes.LOAD_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: action.payload.products,
        isLoading: false,
        error: null
      };
    }
    case ActionTypes.LOAD_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default: {
      return state;
    }
  }
}
