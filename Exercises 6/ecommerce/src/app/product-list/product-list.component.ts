import { Component } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  // Array of products
  products: Array<Product>;

  constructor() {
    // Initializing products array
    this.products = [
      new Product(1, "Soldier", "https://mobileimages.lowes.com/productimages/28dd81a1-fb48-4551-8fd3-484ddf52d3b3/63457645.jpg", 2, true),
      new Product(2, "Bear", "https://m.media-amazon.com/images/I/81FefTBtlvL._AC_UF894,1000_QL80_.jpg", 3, false),
      new Product(3, "Car", "https://m.media-amazon.com/images/I/51ME2KUEQcS._AC_SL1000_.jpg", 1.5, true)
    ]
  }

  // Method to handle output event from product component
  onChangeQuantity(pc: ProductQuantityChange) {
    // Find product in array
    let product = this.products.find((prod) => {
      return prod.id === pc.product.id;
    });
    // If product is found, increase or decrease quantity
    if (product) {
      product.quantity += pc.amountChange;
    } else {
      console.log("Something strange happenend!")
    }

  }
}
