import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../shared/share.module';
import { ProductListComponent } from './product-list.component';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [CommonModule, ShareModule, ProductRoutingModule],
})
export class ProductModule {}
