import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import {Product} from '../../models';
import { By } from '@angular/platform-browser';
import { Observer, Observable } from 'rxjs';
import { RootStoreModule } from 'src/app/root-store';
import { CartItemComponent } from '../cart-item/cart-item.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, ProductComponent, CartItemComponent],
      imports: [RootStoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display products if exists', () => {
    component.products$.subscribe((data) => {
      expect(data.length).toBe(7);
      expect(fixture.debugElement.query(By.css('.product-list__products')).nativeElement).not.toBeUndefined;
    });      
  });

  it('should not display products if not exist', () => {
    component.products$ = Observable.create((observer: Observer<Product[]>) => {observer.next([])});
    component.products$.subscribe((data) => {
      expect(data.length).toBe(0);
      expect(fixture.debugElement.query(By.css('.product-list__products')).nativeElement).toBeUndefined;
    });      
  });

});
