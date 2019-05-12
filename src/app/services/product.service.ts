import {Injectable} from '@angular/core';
import {Product} from '../models';
import {Observable, Observer} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    /**
     * Mocking client-server API
     */
    public getProducts(): Observable<Product[]> {
        return Observable.create((observer: Observer<Product[]>) => {
            observer.next(this.products());
            return observer;
        });
    }

    private products(): Product[] {
        return [
            {id: 1, name: 'Macbook Pro', img: '/assets/img/macbook-pro.jpg', price: 1123.09},
            {id: 2, name: 'iPhone 6', img: '/assets/img/macbook-pro.jpg', price: 599.09},
            {id: 3, name: 'Macbook Air', img: '/assets/img/macbook-pro.jpg', price: 1099.09},
            {id: 4, name: 'AirPods', img: '/assets/img/macbook-pro.jpg', price: 199.09},
            {id: 5, name: 'Zen', img: '/assets/img/macbook-pro.jpg', price: 699.09},
            {id: 6, name: 'iMac', img: '/assets/img/macbook-pro.jpg', price: 3099.09},
        ];
    }
}
