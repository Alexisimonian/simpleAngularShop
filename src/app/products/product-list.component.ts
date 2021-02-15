import { Component, IterableDiffers, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { ICart } from './cart';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  cart: ICart[] = [];
  total: number = 0;
  errorMessage: string = '';
  filteredList: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (product) => {
        this.products = product;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  buyItem(name: string, price: number): void {
    let alreadyInCart = this.cart.find(
      (product) => product.productName === name
    );
    if (alreadyInCart) {
      alreadyInCart.quantity += 1;
    } else {
      this.cart.push({ productName: name, price: price, quantity: 1 });
    }
    this.total += price;
  }

  deleteItem(productName: string): void {
    let product = this.cart.find(
      (product) => product.productName === productName
    );
    if (product) {
      product.quantity -= 1;
      this.total -= product.price;
      product.quantity <= 0
        ? this.cart.splice(this.cart.indexOf(product), 1)
        : false;
    }
  }

  sendTotal(total: number) {
    this.productService.total = total;
  }
}
