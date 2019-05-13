import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Location } from "@angular/common";
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from '@angular/router';
import { routes } from '../../app-routing.module'
import { ProductListComponent } from '../product-list/product-list.component';
import { CartComponent } from '../cart/cart.component';
import { ProductComponent } from '../product/product.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, ProductListComponent, CartComponent, ProductComponent ],
      imports: [RouterTestingModule.withRoutes(routes)]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture.detectChanges();
    router.initialNavigation();
    });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should show cart items if route is not /cart', () => {
    router.navigate(['/']).then(() => {
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.header__menu-section')).nativeElement).not.toBeUndefined;
      });      
    });

    router.navigate(['/products']).then(() => {
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.header__menu-section')).nativeElement).not.toBeUndefined;
      });      
    });

    router.navigate(['']).then(() => {
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.header__menu-section')).nativeElement).not.toBeUndefined;
      });      
    });
  });

  it('should hide cart items if route is /cart', () => {
    router.navigate(['/cart']).then(() => {
      fixture.whenStable().then(() => {
        expect(fixture.debugElement.query(By.css('.header__menu-section')).nativeElement).toBeUndefined;
      });      
    });
  });

});
