import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './products/product.module';
import { HomeComponent } from './home/home.component';
import { ShareModule } from './shared/share.module';

@NgModule({
  imports: [
    ShareModule,
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
