import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {cartReducer} from './reducer';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cart', cartReducer)
  ]
})
export class CartStoreModule { }