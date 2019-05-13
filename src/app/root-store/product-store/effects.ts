import {Injectable} from '@angular/core';
import {Actions, Effect, ofType, ROOT_EFFECTS_INIT} from '@ngrx/effects';
import {ProductService} from '../../services/product.service';
import * as productActions from './actions';
import {map, startWith, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';


@Injectable()
export class ProductEffects {

  constructor(private productsService: ProductService, private actions$: Actions) {
  }

  @Effect()
  initEffect$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map(_ => new productActions.LoadProductRequestAction())
  );

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType<productActions.LoadProductRequestAction>(
      productActions.ActionTypes.LOAD_PRODUCTS_REQUEST
    ),
    switchMap(_ => this.productsService.getProducts()
      .pipe(
        map(products => (new productActions.LoadProductSuccessAction({products})))
      )
    )
  );
}
