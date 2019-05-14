import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';
import { RootStoreState } from 'src/app/root-store';
import { CartStoreSelectors } from 'src/app/root-store/cart-store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cart$: Observable<number>;

  constructor(private store$: Store<RootStoreState.State>, public router: Router) { }

  ngOnInit() {
    this.cart$ = this.store$.select(
      CartStoreSelectors.selectCartTotal
    );
  }
}
