import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductComponent } from './product.component';
import { RootStoreModule } from 'src/app/root-store';
import { By } from '@angular/platform-browser';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductComponent],
      imports: [RootStoreModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = {id: 1, name: 'test product', price: 23, img: '/img-path'};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display product data correctly', () => {
    expect(fixture.debugElement.query(By.css('.product__img')).nativeElement.src).toContain(component.product.img)    
    expect(fixture.debugElement.query(By.css('.product__name')).nativeElement.innerHTML).toEqual(component.product.name);
    expect(fixture.debugElement.query(By.css('.product__price')).nativeElement.innerHTML).toEqual('$' + component.product.price);
  });
});
