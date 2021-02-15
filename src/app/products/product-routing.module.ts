import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ThankyouComponent } from './thankyou.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'thank-you', component: ThankyouComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
