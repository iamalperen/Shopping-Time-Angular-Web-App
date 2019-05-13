import { Action } from '@ngrx/store';
import { Product } from '../../models';

export enum ActionTypes {
  LOAD_PRODUCTS_REQUEST = '[LOAD_PRODUCTS][REQUEST]',
  LOAD_PRODUCTS_FAILURE = '[LOAD_PRODUCTS][FAILURE]',
  LOAD_PRODUCTS_SUCCESS = '[LOAD_PRODUCTS][SUCCESS]'
}

export class LoadProductRequestAction implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS_REQUEST;
  constructor() {}
}

export class LoadProductSuccessAction implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: {products: Product[]}) {}
}

export class LoadProductFailureAction implements Action {
  readonly type = ActionTypes.LOAD_PRODUCTS_FAILURE;
  constructor(public payload: { error: string }) {}
}

export type Actions = LoadProductRequestAction | LoadProductSuccessAction | LoadProductFailureAction;
