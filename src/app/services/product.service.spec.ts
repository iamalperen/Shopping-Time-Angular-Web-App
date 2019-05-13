import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import {Product} from '../models';


describe('ProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  it('#fetchProducts should return something', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service.getProducts()).toBeTruthy();
    expect(service.getProducts()).not.toBeNull();
    expect(service.getProducts()).not.toBeNaN();
  });

  it('#fetchProducts should return products correctly', () => {
    const service: ProductService = TestBed.get(ProductService);
    const products =   [
      {id: 1, name: 'Macbook Pro', img: '/assets/img/macbook-pro.jpg', price: 1123.09},
      {id: 2, name: 'iPhone 6', img: '/assets/img/macbook-pro.jpg', price: 599.09},
      {id: 3, name: 'Macbook Air', img: '/assets/img/macbook-pro.jpg', price: 1099.09},
      {id: 4, name: 'AirPods', img: '/assets/img/macbook-pro.jpg', price: 199.09},
      {id: 5, name: 'Zen', img: '/assets/img/macbook-pro.jpg', price: 699.09},
      {id: 6, name: 'iMac', img: '/assets/img/macbook-pro.jpg', price: 3099.09},
    ];

    service.getProducts().subscribe((data: Product[]) => {
      expect(data.length).toBe(7);
      expect(data[0].name).toBe('Macbook Pro');
      expect(data[2].name).toBe('Macbook Air');
      expect(data[5].name).toBe('iMac');
    });
  });

});
