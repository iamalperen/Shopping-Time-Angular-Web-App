import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { CartStoreActions } from 'src/app/root-store/cart-store';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private store$: Store<RootStoreState.State>) { }

  ngOnInit() { }

  addToCart(item){
      this.store$.dispatch(
        new CartStoreActions.AddProductToCartAction({item: this.product, amount: 1})
      );
  }
}
