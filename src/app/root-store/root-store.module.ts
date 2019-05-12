import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreModule } from './product-store/product-store.module';
import { CartStoreModule } from './cart-store/cart-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductStoreModule,
    CartStoreModule
  ]
})
export class RootStoreModule { }
