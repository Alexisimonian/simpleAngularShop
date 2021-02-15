import { Component, Input, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductService } from './product.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css'],
})
export class ThankyouComponent implements OnInit {
  pageTitle: string = 'Thank you for your order!';
  total: number = this.productService.total;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}
}
