import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../../product.service';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private cartService: CartService) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    const id = params['id'];
    this.product = this.productService.getProductByID(id);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert(product.name + ' has been added to the cart!');
  }
}
