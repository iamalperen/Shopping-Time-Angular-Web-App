import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { RootStoreModule } from 'src/app/root-store';
import { Observable, Observer } from 'rxjs';
import { CartItem } from 'src/app/models';
import { By } from '@angular/platform-browser';


describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RootStoreModule],
      declarations: [CartComponent , CartItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should not list items if cart is empty', () => {
    component.cartItems$ = Observable.create((observer: Observer<CartItem[]>) => {observer.next([])});
    component.cartItems$.subscribe((data) => {
      expect(data.length).toBe(0);
      expect(fixture.debugElement.query(By.css('.product-list__no-products-found')).nativeElement.innerHTML).not.toBeUndefined();
    });  
  });

  it('should not show no items message if cart is not empty', () => {
    component.cartItems$ = Observable.create((observer: Observer<CartItem[]>) => {observer.next([{amount: 1, item: {id:1, name: 'test item', price: 11, img: ''}}])});
    fixture.detectChanges();
    component.cartItems$.subscribe((data) => {
      expect(data.length).not.toBe(0);
      expect(data.length).toBe(1);
      setTimeout(() => {
        expect(fixture.debugElement.query(By.css('.product-list__no-products-found')).nativeElement.innerHTML).toBeUndefined();
      }, 1000);
    });  
  });

  it('should show cart items when cart is not empty', () => {
    component.cartItems$ = Observable.create((observer: Observer<CartItem[]>) => {observer.next([{amount: 1, item: {id:1, name: 'test item', price: 11, img: ''}}])});
    fixture.detectChanges();
    component.cartItems$.subscribe((data) => {
      expect(data.length).toBe(1);
      setTimeout(() => {
        expect(fixture.debugElement.query(By.css('.product-list__products')).nativeElement.innerHTML).not.toBeUndefined();
      }, 1000);
    });  
  });

});
