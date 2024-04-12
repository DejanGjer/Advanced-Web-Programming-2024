import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  product: Product;

  constructor() {}

  ngOnInit() {
    this.product = new Product("Test Product", "https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg", 85, false);
  }

  increaseQuantity() {
    this.product.quantity++;
  }

  decreaseQuantity() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }

  canDecrease() {
    return this.product.quantity > 0;
  }
}
