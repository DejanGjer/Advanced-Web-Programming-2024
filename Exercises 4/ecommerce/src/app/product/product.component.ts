import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  public product: Product;

  constructor() {
    this.product = new Product("Toy", 2, "https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg", true);
  }

  increaseQuantity(): void {
    this.product.quantity++;
  }

  decreaseQuantity(): void {
    if(!this.product.canDecrease())  return;
    this.product.quantity--;
  }
}
