import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {ProductEffects} from './effects';
import {productReducer} from './reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('product', productReducer),
    EffectsModule.forFeature([ProductEffects])
  ],
  providers: [ProductEffects]
})
export class ProductStoreModule { }
