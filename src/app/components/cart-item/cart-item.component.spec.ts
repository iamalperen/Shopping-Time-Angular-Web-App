import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';
import { RootStoreModule } from 'src/app/root-store';
import { By } from '@angular/platform-browser';


describe('CartItemComponent', () => {
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RootStoreModule],
      declarations: [CartItemComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;
    component.item = {amount: 1, item: {id: 5, name: 'test name', img: '', price: 24}}; // mock @input item
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display item data correctly', () => {
    expect(fixture.debugElement.query(By.css('.cart-item__name')).nativeElement.innerHTML).toEqual(component.item.item.name);
    expect(fixture.debugElement.query(By.css('.cart-item__price-amount')).nativeElement.innerHTML).toEqual(component.item.item.price + '');
    expect(fixture.debugElement.query(By.css('input.cart-item__amount-input')).nativeElement.value).toEqual(component.item.amount + '');
  });

  it('should remove item when click on remove button', () => {
    const removeButton = fixture.debugElement.nativeElement.querySelector('.cart-item__remove-btn');
    removeButton.click();
    expect(component.item).toBeNull;
  });

  it('should update item amount when make changes on amount input field', () => {
    const amountInput = fixture.debugElement.nativeElement.querySelector('.cart-item__amount-input');

    expect(amountInput.value).toEqual(component.item.amount + '');

    // Update Amount
    amountInput.value = 3;
    amountInput.dispatchEvent(new Event('input'));

    expect(amountInput.value).toEqual(3 + '');
  });

  it('should remove item when make amount value as 0 on input field', () => {
    const amountInput = fixture.debugElement.nativeElement.querySelector('.cart-item__amount-input');

    expect(amountInput.value).toEqual(component.item.amount + '');

    // Update Amount
    amountInput.value = 0;
    amountInput.dispatchEvent(new Event('input'));

    expect(component.item).toBeNull;
  });



});
