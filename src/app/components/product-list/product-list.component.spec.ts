import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../../services/product.service';
import {Product} from '../../models';
import { By } from '@angular/platform-browser';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent, ProductComponent ]
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
    expect(component.products$.length).toBe(7);
    expect(fixture.debugElement.query(By.css('.product-list__products')).nativeElement).not.toBeUndefined;
  });

  it('should not display products if not exist', () => {
    component.products$ = [];
    expect(component.products$.length).toBe(0);
    expect(fixture.debugElement.query(By.css('.product-list__products')).nativeElement).toBeUndefined;
  });

});
