import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component';
import {AppRoutingModule} from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductAlertsComponent } from './product/product-alerts/product-alerts.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    NavbarComponent,
    ProductAlertsComponent,
    CartComponent,
    ShippingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
