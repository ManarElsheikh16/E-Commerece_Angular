import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminCustomerComponent } from './admin-customer/admin-customer.component';
import { AdminSellerComponent } from './admin-seller/admin-seller.component';
import { AdminShipperComponent } from './admin-shipper/admin-shipper.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminCustomerComponent,
    AdminSellerComponent,
    AdminShipperComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:
  [
    AdminDashboardComponent 
  ]
})
export class AdminModule { }
