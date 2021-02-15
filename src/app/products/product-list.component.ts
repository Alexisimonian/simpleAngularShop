import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { ICart } from './cart';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  cart: ICart[] = [];
  errorMessage: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (product) => {
        this.products = product;
        console.log('here');
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  buyItem(name: string, price: number): void {
    this.cart.push({ productName: name, price: price, quantity: 1 });
  }
}
