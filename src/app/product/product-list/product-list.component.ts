import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../product.service';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  // onClickItem(index: number){
  //   // console.log("Product: " + this.products[index].name);
  // }
  //
  // share(index: number){
  //   // console.log("Share: " + this.products[index].name);
  //   window.alert(this.products[index].name + " has been shared!");
  // }
  //
  // onNotify(){
  //   window.alert("You will be notified when product goes on sale!");
  // }
}
