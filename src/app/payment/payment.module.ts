import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CachOnDeliveryComponent } from './Components/cach-on-delivery/cach-on-delivery.component';
import { CarditDebitComponent } from './Components/cardit-debit/cardit-debit.component';
import { NetBankingComponent } from './Components/net-banking/net-banking.component';
import { PaybalComponent } from './Components/paybal/paybal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
FormsModule


@NgModule({
  declarations: [
    CachOnDeliveryComponent,
    CarditDebitComponent,
    NetBankingComponent,
    PaybalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    CachOnDeliveryComponent,
    CarditDebitComponent,
    NetBankingComponent,
    PaybalComponent
  ]
})
export class PaymentModule { }
