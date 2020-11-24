import {Product} from './product/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    new Product('Phone XL', 'An iPhone with XL size', 750),
    new Product('Phone Mini', '', 650),
    new Product('Phone Standard', 'An iPhone with standard size', 720)
  ];

  getProducts(){
    return this.products;
  }
}
