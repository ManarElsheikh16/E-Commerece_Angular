import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ShipperRegisterComponent } from './Components/shipper-register/shipper-register.component';
import { SellerRegisterComponent } from './Components/seller-register/seller-register.component';
import { AdminRegisterComponent } from './Components/Admin-Register/admin-register/admin-register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent,
    ShipperRegisterComponent,
    SellerRegisterComponent,
    AdminRegisterComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
  ],
  exports :[
    LoginComponent,
    RegisterComponent,
    LogoutComponent,ReactiveFormsModule
  ]
})
export class AuthntacationModule { }
