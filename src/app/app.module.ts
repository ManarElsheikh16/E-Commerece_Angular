import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { AuthntacationModule } from './authntacation/authntacation.module';
import { InformationModule } from './information/information.module';
import { PaymentModule } from './payment/payment.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingleproductComponent } from './product/Components/singleproduct/singleproduct.component';
import { AdminModule } from './admin/admin.module';

import { SellerManModule } from './seller-man/seller-man.module';
import { AddProductComponent } from './seller-man/Component/add-product/add-product.component';
import { ShipperModule } from './shipper/shipper.module';


@NgModule({
  declarations: [
  AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AuthntacationModule,
    InformationModule,
    PaymentModule,
    SharedModule,
    HomeModule,
    ReactiveFormsModule,
    AdminModule,
    FormsModule,
    SellerManModule,
    ProductModule,
    ShipperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
