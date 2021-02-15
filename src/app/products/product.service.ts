import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'assets/products/products.json';
  total: number = 0;
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];

  constructor(private http: HttpClient) {}

  setFilter(filter: string) {
    this.filteredProducts = [];
    this.getProducts().subscribe({
      next: (product) => {
        this.products = product;
      },
    });
    this.products.forEach((product) => {
      if (
        product.productName.search(filter) !== -1 ||
        product.category.search(filter) !== -1
      ) {
        this.filteredProducts.push(product);
        console.log(this.filteredProducts);
      }
    });
  }

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productUrl)
      .pipe(tap((data) => catchError(this.handleError)));
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}
