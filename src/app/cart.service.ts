import {Injectable} from '@angular/core';
import {Product} from './product/product.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items = [];

  constructor(private httpClient: HttpClient) {
  }

  addToCart(product: Product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingCosts(){
    return this.httpClient.get('/assets/shipping.json');
  }
}
