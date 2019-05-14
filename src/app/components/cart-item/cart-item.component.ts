import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from "../../models";
import {CartStoreActions} from "../../root-store/cart-store";
import {RootStoreState} from "../../root-store";
import {Store} from '@ngrx/store';


@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
    @Input() item: CartItem;

    constructor(private store$: Store<RootStoreState.State>) { }

    ngOnInit() { }

    removeItem() {
        this.store$.dispatch(new CartStoreActions.RemoveItemFromCartAction(this.item));
    }

    onAmountChange(amount, item) {
        // Avoid side effects of amount value
        amount = (!amount || amount === 0 || amount < 0) ? 0 : parseInt(amount, 10);
        if (amount === 0) { this.removeItem(); }  // 0 numbered item cannot stay at cart
        else { this.store$.dispatch(new CartStoreActions.UpdateCartAction({amount, item})); }
    }

}
