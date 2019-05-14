import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models';
import { ProductService } from 'src/app/services';
import { Store } from '@ngrx/store';
import { RootStoreState, ProductStoreSelectors, ProductStoreActions } from 'src/app/root-store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store$: Store<RootStoreState.State>) {
    this.products$ = this.store$.select(ProductStoreSelectors.selectProducts);
    this.store$.dispatch(new ProductStoreActions.LoadProductRequestAction());
  }

  ngOnInit() { }

}