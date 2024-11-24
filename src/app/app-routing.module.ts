import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './information/Components/about-us/about-us.component';
import { HomePageComponent } from './home/Components/home-page/home-page.component';
import { ContectUsComponent } from './information/Components/contect-us/contect-us.component';
import { LoginComponent } from './authntacation/Components/login/login.component';
import { AllproductsComponent } from './product/Components/allproducts/allproducts.component';
import { SingleproductComponent } from './product/Components/singleproduct/singleproduct.component';

import { RegisterComponent } from './authntacation/Components/register/register.component';
import { ShipperRegisterComponent } from './authntacation/Components/shipper-register/shipper-register.component';
import { SellerRegisterComponent } from './authntacation/Components/seller-register/seller-register.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddProductComponent } from './seller-man/Component/add-product/add-product.component';
import { ShowAllComponent } from './seller-man/show-all/show-all.component';
import { AddSellerProductComponent } from './seller-man/Component/add-seller-product/add-seller-product.component';
import { AdminSellerComponent } from './admin/admin-seller/admin-seller.component';
import { AdminShipperComponent } from './admin/admin-shipper/admin-shipper.component';
import { AdminCustomerComponent } from './admin/admin-customer/admin-customer.component';
import { ViewCartComponent } from './cart/Compoents/del-cart/view-cart/view-cart/view-cart.component';
import { CachOnDeliveryComponent } from './payment/Components/cach-on-delivery/cach-on-delivery.component';
import { DoneComponent } from './shared/Components/done/done.component';
import { UnlockedComponent } from './shared/Components/unlocked/unlocked/unlocked.component';
import { AdminRegisterComponent } from './authntacation/Components/Admin-Register/admin-register/admin-register.component';
import { AuthGuard } from './auth.guard';
import { ShipperHomeComponent } from './shipper/components/shipper-home/shipper-home.component';

const routes: Routes = [
  { path: '', redirectTo: "Home", pathMatch: 'full' },
  { path: "Home", component: HomePageComponent, },
  { path: "about", component: AboutUsComponent },
  { path: "contact", component: ContectUsComponent },
  { path: "Allproduct", component: AllproductsComponent },
  { path: "Home/perodectone/:id", component: SingleproductComponent },
  { path: "register", component: RegisterComponent },
  { path: "cart", canActivate: [AuthGuard], component: ViewCartComponent },
  { path: "shipperRegister", component: ShipperRegisterComponent },
  { path: "sellerRegister", component: SellerRegisterComponent },
  { path: "AdminRegister", canActivate: [AuthGuard], component: AdminRegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "addProducts", canActivate: [AuthGuard], component: AddProductComponent },
  { path: "checkout", component: CachOnDeliveryComponent },
  { path: "addSellerProduct", canActivate: [AuthGuard], component: AddSellerProductComponent },
  { path: "done", component: DoneComponent },
  { path: "unlocked", component: UnlockedComponent },
  { path: "shipperhome", component: ShipperHomeComponent },
  { path: "ShowAllSeller", canActivate: [AuthGuard], component: ShowAllComponent },
  {
    path: "Admin", canActivate: [AuthGuard], component: AdminDashboardComponent,
    children:
      [
        { path: "admin_seller", component: AdminSellerComponent },
        { path: "admin_customer", component: AdminCustomerComponent },
        { path: "admin_shipper", component: AdminShipperComponent }
      ]
  },
  { path: '**', redirectTo: 'Home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
