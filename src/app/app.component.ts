import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop-app';
  _filter: string = '';

  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.productService.setFilter(this._filter);
    this.router.navigate(['/products']);
  }

  constructor(private productService: ProductService, private router: Router) {}
}
