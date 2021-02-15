import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { ProductListComponent } from './product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ThankyouComponent } from './thankyou.component';

@NgModule({
  declarations: [ProductListComponent, ThankyouComponent],
  imports: [CommonModule, ShareModule, ProductRoutingModule],
})
export class ProductModule {}
