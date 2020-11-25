import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onClickItem(){
    // console.log("Clicked: " + this.product.name);
    this.router.navigate([this.product.id], { relativeTo: this.route });
  }

  share(){
    window.alert("Shared: " + this.product.name)
  }

  onNotify(){
    window.alert("You will be notified when " + this.product.name + " goes on sale!")
  }
}
