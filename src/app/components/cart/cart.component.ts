import {Component, OnInit} from '@angular/core';
import {RootStoreState} from "../../root-store";
import {Store} from '@ngrx/store';
import {CartStoreActions, CartStoreSelectors} from "../../root-store/cart-store";
import {Observable} from "rxjs";
import {CartItem} from "../../models";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
    cartSum$: Observable<number>;
    cartItems$: Observable<CartItem[]>;


    constructor(private store$: Store<RootStoreState.State>) {
    }

    ngOnInit() {
        this.cartSum$ = this.store$.select(CartStoreSelectors.selectCartSum);
        this.cartItems$ = this.store$.select(CartStoreSelectors.selectCartItems)
    }

    clearCart() {
        this.store$.dispatch(
            new CartStoreActions.ClearCartAction()
        );
    }

}
