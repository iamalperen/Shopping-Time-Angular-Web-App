import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { routes } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        ProductListComponent, 
        ProductComponent,
        CartComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture.detectChanges();
    router.initialNavigation();
    });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should initially redirect empty "" route url to "/products"', () => {
    router.navigate(['']).then(() => {
      expect(location.path()).toBe("/products");
    });
  });

  it('should redirect any route not in routes like "xyz" url to "/products"', () => {
    router.navigate(['xyz']).then(() => {
      expect(location.path()).toBe("/products");
    });

    router.navigate(['ZXY']).then(() => {
      expect(location.path()).toBe("/products");
    });

    router.navigate(['alperen']).then(() => {
      expect(location.path()).toBe("/products");
    });
  });

});
