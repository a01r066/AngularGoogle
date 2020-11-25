import {Product} from './product/product.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    new Product('sp01','Phone XL', 'An iPhone with XL size', 750),
    new Product('sp02','Phone Mini', '', 650),
    new Product('sp03','Phone Standard', 'An iPhone with standard size', 720)
  ];

  getProducts(){
    return this.products;
  }

  getProductByID(id: string){
    const product = this.products.find(product => product.id === id);
    return product;
  }
}
